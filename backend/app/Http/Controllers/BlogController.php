<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogImage;
use Illuminate\Http\Request;
use App\Http\Requests\BlogRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;

class BlogController extends Controller
{
    public function index() {
        $data = $this->getBlogData();
        return view('news.index', compact('data'));
    }

    public function create() {
        $temporyId = 'id-'.Auth::id();
        $images = BlogImage::where('blog_id', $temporyId)->get();
        return view('news.create', compact('images'));
    }

    public function store(BlogRequest $request) {
        try {
            DB::beginTransaction();
            $data = $this->blogRequestInfo($request);
            $blog = Blog::create($data);
            $temporyId = 'id-'.Auth::id();
            BlogImage::where('blog_id',$temporyId)->update(['blog_id'=>$blog->id]);
            DB::commit();
            return redirect()->route('news')->with(['success' => 'News Created Successfully!']);
        } catch (\Throwable $th) {
            logger($th);
            DB::rollBack();
            return back();
        }
    }

    public function edit(Blog $blog) {
        DB::listen(function($query) {
            logger($query->sql);
        });
        return view('news.edit', compact('blog'));
    }

    public function update(BlogRequest $request, Blog $blog) {
        try {
            DB::beginTransaction();
            $data = $this->blogRequestInfo($request);
            $blog->update($data);
            DB::commit();
            return redirect()->route('news')->with(['success' => 'News Updated Successfully!']);
        } catch (\Throwable $th) {
            logger($th);
            DB::rollBack();
            return back();
        }
    }

    public function destroy(Blog $blog) {
        foreach ($blog->blog_images as $image) {
            $image->delete();
        }
        $blog->delete();
        return back()->with(['success' => 'News Deleted Successfully!']);
    }

    public function createImage(Request $request) {
        $temporyId = 'id-'.Auth::id();
        return $this->imageStoreProcess($request,$temporyId);
    }

    public function editCreateImage(Request $request,$blogId) {
        return $this->imageStoreProcess($request,$blogId);
    }

    public function deleteImage(BlogImage $image) {
        $image->delete();
        return back();
    }

    // start api
    public function getBlogApi() {
        $blogs = $this->getBlogData();
        $data = [];
        if ($blogs->currentPage() > $blogs->lastPage()) {
            return error();
        }
        $data = [];
        foreach ($blogs as $blog) {
            $data[] = $this->dataInfo($blog);
        }
        return dataWithPagination($blogs, $data);
    }

    public function show($id) {
        $blog = Blog::find($id);
        $latest = Blog::where('id', '!=', $id)->latest()->take(3)->get();
        $latestBlog = [];
        if (!$blog) {
            return error();
        }
        $data = $this->dataInfo($blog);
        foreach ($latest as $item) {
            $latestBlog[] = $this->dataInfo($item);
        }
        return response()->json([
            "data" => $data,
            "latest" => $latestBlog
        ],200);
    }

    private function dataInfo($blog) {
        return [
            'id' => $blog->id,
            'title' => $blog->title,
            'description' => $blog->description,
            'category' => $blog->category_name,
            'feature' => $blog->medium_feature,
            'created_at' => $blog->created_at->format('j/n/Y'),
        ];
    }
    // end api

    private function getBlogData() {
        return Blog::filter(request(['search','category']))->orderBy('created_at','desc')->paginate(12)->withQueryString();
    }

    private function blogRequestInfo($request) {
        return [
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'feature' => $request->feature,
        ];
    }

    private function imageStoreProcess($request,$blogId) {
        $images = $request->file('images');
        if ($images) {
            try {
                DB::beginTransaction();
                foreach ($images as $image) {
                    $extension = $image->getClientOriginalExtension();
                    $imageName = uniqid().time().'.'.$extension;
                    storeImage($image,$imageName);
                    BlogImage::create(['blog_id'=> $blogId,'name'=>$imageName]);
                }
                DB::commit();
                $images = BlogImage::where('blog_id', $blogId)->get();
                return $images;
            } catch (\Throwable $th) {
                logger($th);
                DB::rollBack();
                return back();
            }
        }
    }
}
