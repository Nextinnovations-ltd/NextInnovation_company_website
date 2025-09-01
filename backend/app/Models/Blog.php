<?php

namespace App\Models;

use Illuminate\Support\Str;
use App\Models\BlogCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Blog extends Model
{
    use HasFactory,SoftDeletes;
    protected $guarded = ['id'];

    public function blog_images() {
        return $this->hasMany(BlogImage::class);
    }

    public function blog_category(){
        return $this->belongsTo(BlogCategory::class, 'category');
    }

    public function getMediumFeatureAttribute() {
        return env('AWS_URL_ENDPOINT') . '/images/medium/' . $this->feature;
    }

    public function getThumbnailFeatureAttribute() {
        return env('AWS_URL_ENDPOINT') . '/images/thumbnail/' . $this->feature;
    }

    public function scopeFilter($query, $filter) {
        $query->when($filter['search'] ?? false, function($query,$search) {
            $query->where(function ($query) use ($search) {
                $query->where('title', 'LIKE', '%' . $search . '%')
                    ->orWhere('id',$search);
            });
        });
        $query->when($filter['category'] ?? false, function($query,$category) {
            $query->where('category',$category);
        });
    }

    public function getTitleLimitAttribute() {
        return Str::limit($this->title, 60, '...');
    }
}
