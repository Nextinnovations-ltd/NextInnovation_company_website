<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
        $post = request()->isMethod('post');
        if ($post) {
            $validationRules = [
                'name' => 'required',
                'email' => 'required|email|unique:users,email,',
                'role' => 'required',
                'password' => 'required|min:4',
                'confirmPassword' => 'required|min:4|same:password',
            ];
        }else {
            $user = $request->route('user');
            $userId = $user->id;
            $validationRules = [
                'name' => 'required',
                'email' => 'required|email|unique:users,email,'.$userId,
                'role' => 'required',
            ];
            $request->changePassword == 'on' ? $validationRules['password'] = 'required|min:4' : '';
            $request->changePassword == 'on' ? $validationRules['confirmPassword'] = 'required|min:4|same:password' : '';
        }

        return $validationRules;
    }
}
