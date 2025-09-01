<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;
use Illuminate\Foundation\Http\FormRequest;

class BlogCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(Request $request): array
    {
        $post = $request->isMethod('post');
        if ($post) {
            return [
                'name' => 'required|string|max:30|unique:blog_categories,name',
            ];
        }else {
            $category = $request->route('category');
            $categoryId = $category->id;
            return [
                'name' => 'required|string|max:30|unique:blog_categories,name,'.$categoryId,
            ];
        }
    }
}
