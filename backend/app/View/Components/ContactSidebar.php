<?php

namespace App\View\Components;

use Closure;
use App\Models\Contact;
use Illuminate\View\Component;
use Illuminate\Contracts\View\View;

class ContactSidebar extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        $unreadCount = Contact::where('done', false)->count();
        return view('components.contact-sidebar', compact('unreadCount'));
    }
}
