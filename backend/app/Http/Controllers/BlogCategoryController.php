<?php

namespace App\Http\Controllers;

use App\Models\BlogCategory;
use Illuminate\Http\Request;
use App\Http\Requests\BlogCategoryRequest;

class BlogCategoryController extends Controller
{
    public function category() {
        $category = BlogCategory::filter(request(['search']))->paginate(10)->withQueryString();
        return view('news_category.index', compact('category'));
    }

    public function createCategory() {
        return view('news_category.create');
    }

    public function storeCategory(BlogCategoryRequest $request) {
        BlogCategory::create(['name' => $request->name]);
        return redirect()->route('news.category')->with(['success' => 'Category Created Successfully!']);
    }

    public function editCategory(BlogCategory $category) {
        return view('news_category.edit', compact('category'));
    }

    public function updateCategory(BlogCategoryRequest $request, BlogCategory $category) {
        $category->update(['name' => $request->name]);
        return redirect()->route('news.category')->with(['success' => 'Category Updated Successfully!']);
    }

    public function destroyCategory(BlogCategory $category) {
        $category->delete();
        return back()->with(['success' => 'Category Deleted Successfully!']);
    }

    public function getBlogCategoryApi() {
        $category = BlogCategory::select('id','name')->get();
        return response()->json([
            "data" => $category
        ]);
    }
}
