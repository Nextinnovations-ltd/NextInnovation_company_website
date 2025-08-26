<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ContactRequest extends FormRequest
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
            'name' => 'required|min:5',
            'email' => 'required|email|max:50',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:6|max:20',
            'interest' => 'required|numeric|between:1,4',
            'country' => 'nullable|max:50',
            'budget' => 'nullable|max:20',
            'message' => 'nullable|max:65000',
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
