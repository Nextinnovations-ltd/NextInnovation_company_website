<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ContactJpRequest extends FormRequest
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
        return [
            'name' => 'required',
            'email' => 'required|email|max:50',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:6|max:20',
            'interest' => 'required|numeric|between:5,11',
            'country' => 'nullable|max:50',
            'budget' => 'nullable|max:20',
            'message' => 'nullable|max:65000',
        ];
    }

    public function messages(): array
    {
        return [
            '*.required' => 'これは必須項目です。',
            'email.email' => '正しいメールアドレスフォーマットで入力してください。',
            'phone.regex' => '正しい電話番号フォーマットで入力してください。',
            'phone.min' => '電話番号は最低6桁入力してください。',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'message'   => 'Validation Error',
            'errors'      => $validator->errors()
        ],422));
    }
}
