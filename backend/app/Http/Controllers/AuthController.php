<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Mail\ForgetPasswordMail;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function loginForm() {
        return view('auth.login');
    }

    public function login(LoginRequest $request) {
        $user = User::select('email')->where('email', $request->email)->first();
        if ($user) {
            $credentials = $request->only('email','password');
            if (auth()->attempt($credentials, $request->filled('remember'))){
                return redirect()->intended(route('dashboard'));
            } else {
                return back()->withInput($request->only('email', 'remember'))->with([ 'error' => 'Wrong password.' ]);
            }
        } else {
            return back()->withInput($request->only('email', 'remember'))->with([ 'error' => 'User not found.' ]);
        }
    }

    public function logout() {
        auth()->logout();
        return redirect('/admin/login');
    }

    public function changePassword() {
        return view('auth.change-password');
    }

    public function updatePassword(Request $request) {
        $request->validate([
            'oldPassword' => 'required|min:4|',
            'newPassword' => 'required|min:4',
            'confirmNewPassword' => 'required|min:4|same:newPassword',
        ]);
        $user = Auth::user();
        if (Hash::check($request->oldPassword, $user->password)) {
            $user->update(['password' => Hash::make($request->newPassword)]);
        }else {
            return back()->with(['error' => 'Wrong Old Password!']);
        };
        return back()->with(['success' => 'Password Changed Successfully!']);
    }

    // start forget password
    public function forgetPassword() {
        return view('auth.forget-password');
    }

    public function sendMail(Request $request) {
        $request->validate([
            'email' => 'required|email|exists:users,email',
        ]);
        $email = $request->email;
        DB::table('password_reset_tokens')->where('email',$email)->delete();
        try {
            DB::beginTransaction();
            $token = Str::random(65);
            $data = [
                'email' => $email,
                'token' => $token,
                'created_at' => Carbon::now()
            ];
            DB::table('password_reset_tokens')->insert($data);
            Mail::to($email)->send(new ForgetPasswordMail($data));
            DB::commit();
            return back()->with(['success' => 'Sent email for reset password and check your mail']);
        } catch (\Throwable $th) {
            logger($th);
            DB::rollBack();
            return back()->with(['error' => 'Something went wrong']);
        }
    }

    public function verifyMail($token) {
        $forgetDb = DB::table('password_reset_tokens')->where('token',$token)->first();
        if ($forgetDb) {
            return view('auth.reset-password', compact('token'));
        }else {
            abort(404);
        }
    }

    public function resetPassword(Request $request, $token) {
        $request->validate([
            'newPassword' => 'required|min:4',
            'confirmNewPassword' => 'required|min:4|same:newPassword',
        ]);
        $forgetDb = DB::table('password_reset_tokens')->where('token',$token)->first();
        try {
            DB::beginTransaction();
            User::where('email', $forgetDb->email)->update(['password' => Hash::make($request->newPassword)]);
            DB::table('password_reset_tokens')->where('token',$token)->delete();
            DB::commit();
            return redirect()->route('loginForm')->with(['success' => 'Password Reset Successfully']);
        } catch (\Throwable $th) {
            logger($th);
            DB::rollBack();
            return back()->with(['error' => 'Something went wrong']);
        }
    }
    // end forget password
}
