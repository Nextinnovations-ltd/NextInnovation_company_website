<?php

namespace App\Http\Controllers;

use App\Models\Work;
use Illuminate\Http\Request;
use App\Http\Requests\WorkRequest;
use Illuminate\Support\Facades\DB;

class WorkController extends Controller
{
    public function index() {
        $data = $this->getWorkData();
        return view('work.index', compact('data'));
    }

    public function getWorkApi() {
        $works = $this->getWorkData();
        if ($works->currentPage() > $works->lastPage()) {
            return error();
        }
        $data = [];
        foreach ($works as $work) {
            $data[] = [
                'id' => $work->id,
                'title' => $work->title,
                'language' => $work->language_name,
                'category' => $work->category_name,
                'link' => $work->link,
                'image' => $work->medium,
                'created_at' => $work->created_at->format('j M Y g:i A')
            ];
        }
        return dataWithPagination($works, $data);
    }

    public function latestTwo() {
        $works = Work::latest()->take(2)->get();
        $data = [];
        foreach ($works as $work) {
            $data[] = [
                'id' => $work->id,
                'title' => $work->title,
                'language' => $work->language_name,
                'category' => $work->category_name,
                'link' => $work->link,
                'image' => $work->image_url,
                'created_at' => $work->created_at->format('j M Y g:i A')
            ];
        }
        return response()->json([
            "data" => $data
        ], 200);
    }

    public function create() {
        return view('work.create');
    }

    public function store(WorkRequest $request) {
        try {
            DB::beginTransaction();
            $image = $request->file('image');
            $extension = $image->getClientOriginalExtension();
            $imageName = uniqid().time().'.'.$extension;
            storeImage($image,$imageName);
            $data = $this->workRequestInfo($request,$imageName);
            Work::create($data);
            DB::commit();
            return redirect()->route('works')->with(['success' => 'Successful Work Created Successfully!']);
        } catch (\Throwable $th) {
            logger($th);
            DB::rollBack();
            return back();
        }
    }

    public function edit(Work $work) {
        return view('work.edit', compact('work'));
    }

    public function update(WorkRequest $request,Work $work) {
        try {
            DB::beginTransaction();
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $extension = $image->getClientOriginalExtension();
                $imageName = uniqid().time().'.'.$extension;
                storeImage($image,$imageName);
            }else {
                $imageName = $work->image;
            }
            $data = $this->workRequestInfo($request,$imageName);
            $work->update($data);
            DB::commit();
            return redirect()->route('works')->with(['success' => 'Successful Work Updated Successfully!']);
        } catch (\Throwable $th) {
            logger($th);
            DB::rollBack();
            return back();
        }
    }

    public function destroy(Work $work) {
        $work->delete();
        return back()->with(['success' => 'Successful Work Deleted Successfully!']);
    }

    private function getWorkData() {
        return Work::filter(request(['search','language','category']))->orderBy('created_at', 'desc')->paginate(12)->withQueryString();
    }

    private function workRequestInfo($request,$imageName) {
        $data = [
            'title' => $request->title,
            'link' => $request->link,
            'language' => $request->language,
            'category' => $request->category,
            'image' => $imageName,
        ];
        return $data;
    }
}
