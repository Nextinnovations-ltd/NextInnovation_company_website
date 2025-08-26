<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ContactRequest;

class ContactController extends Controller
{
    public function index() {
        $data = Contact::filter(request(['search','read']))->orderBy('done')->orderBy('created_at','desc')->paginate(15)->withQueryString();
        return view('contact.index', compact('data'));
    }

    public function done(Contact $contact) {
        $contact->update(['done' => true]);
        return back()->with(['success' => 'Contact Read is Successfully!']);
    }

    public function show(Contact $contact) {
        return view('contact.show', compact('contact'));
    }

    public function contactValidation(ContactRequest $request) {
        return response()->json([
            "data" => [
                "success" => "true"
            ]
        ]);
    }

    public function store(Request $request) {
        try {
            $data = $this->requestContactInfo($request);
            DB::beginTransaction();
            $contact = Contact::create($data);
            $mail = [$contact->email, 'info@next-innovations.ltd'];
            Mail::to($mail)->send(new ContactMail($contact));
            DB::commit();
            return response()->json([
                "data" => [
                    "success" => "Sent message successfully and check your mail."
                ]
            ]);
        } catch (\Throwable $th) {
            logger($th);
            DB::rollBack();
            return response()->json([
                "error" => "Something went wrong"
            ]);
        }
    }

    private function requestContactInfo($request) {
        return [
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'interest' => $request->interest,
            'country' => $request->country,
            'budget' => $request->budget,
            'message' => $request->message,
        ];
    }
}
