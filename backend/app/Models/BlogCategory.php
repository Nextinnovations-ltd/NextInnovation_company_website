<?php

namespace App\Models;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BlogCategory extends Model
{
    use HasFactory,SoftDeletes;
    protected $guarded = ['id'];

    public function blogs() {
        return $this->hasMany(Blog::class, 'category');
    }

    public function scopeFilter($query, $filter) {
        $query->when($filter['search'] ?? false, function($query,$search) {
            $query->where('name', 'LIKE', '%' . $search . '%');
        });
    }
}
