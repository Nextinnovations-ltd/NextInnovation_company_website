<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Mail\ContactMail;
use App\Mail\ContactJpMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ContactRequest;
use App\Http\Requests\ContactJpRequest;

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

    public function contactValidationJp(ContactJpRequest $request) {
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

    public function storeJp(Request $request) {
        try {
            $data = $this->requestContactInfo($request);
            DB::beginTransaction();
            $contact = Contact::create($data);
            $mail = [$contact->email];
            Mail::to($mail)->send(new ContactJpMail($contact));
            DB::commit();
            return response()->json([
                "data" => [
                    "success" => "ご連絡を承りました。折り返しご連絡いたします。"
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
            'company_name' => $request->company_name,
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'interest' => $request->interest,
            'country' => $request->country,
            'budget' => $request->budget,
            'budget_jp' => $request->budget_jp,
            'hope' => $request->hope,
            'known' => $request->known,
            'message' => $request->message,
        ];
    }
}
