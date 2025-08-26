<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;
    public $contact;

    /**
     * Create a new message instance.
     */
    public function __construct($contact)
    {
        $budget = $contact['budget'];
        preg_match('/^(\d+)(\D+)$/u', $budget, $matches);

        if (count($matches) === 3) {
            $number = $matches[1];
            $currency = $matches[2];
            $formattedBudget = number_format((int) $number) . $currency;
        } else {
            $formattedBudget = $budget; // fallback if pattern doesn't match
        }
        $contact['budget'] = $formattedBudget;

        $this->contact = $contact;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Contact Mail (Next Innovations - ' . date('d M Y h:i A') . ')',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mails.contact',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
