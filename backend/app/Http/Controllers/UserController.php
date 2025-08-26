<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index() {
        $data = User::filter(request(['search','role']))->paginate(10)->withQueryString();
        return view('user.index', compact('data'));
    }

    public function create() {
        return view('user.create');
    }

    public function store(UserRequest $request) {
        $data = $this->userRequestInfo($request);
        User::create($data);
        return redirect()->route('users')->with(['success' => 'User Created Successfully!']);
    }

    public function edit(User $user) {
        return view('user.edit', compact('user'));
    }

    public function update(UserRequest $request, User $user) {
        $data = $this->userRequestInfo($request);
        $user->update($data);
        return redirect()->route('users')->with(['success' => 'User Updated Successfully!']);
    }

    public function destroy(User $user) {
        $deletemail = $user->email . '_delete';
        $user->update(['email' => $deletemail]);
        $user->delete();
        return back()->with(['success' => 'User Deleted Successfully!']);
    }

    private function userRequestInfo($request) {
        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
        ];
        if ($request->password) {
            $data['password'] = Hash::make($request->password);
        }
        return $data;
    }
}
