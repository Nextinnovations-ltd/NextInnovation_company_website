<?php

namespace App\View\Components;

use Closure;
use App\Models\BlogCategory;
use Illuminate\View\Component;
use Illuminate\Contracts\View\View;

class BlogCategoryDropDown extends Component
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
        $category = BlogCategory::get();
        return view('components.blog-category-drop-down', compact('category'));
    }
}
