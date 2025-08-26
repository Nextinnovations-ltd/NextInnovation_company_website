<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WorkRequest extends FormRequest
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
    public function rules(): array
    {
        $imagevalidation = request()->isMethod('post') ? 'required' : '';
        return [
            'title' => 'required|min:4|max:255',
            'link' => 'required|min:10|max:255',
            'language' => 'required',
            'category' => 'required',
            'image' => [$imagevalidation,'image','mimes:jpg,png,jpeg,gif,svg','max:5120'],
        ];
    }
}
