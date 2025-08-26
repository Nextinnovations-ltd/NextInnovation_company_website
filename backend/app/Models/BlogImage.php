<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BlogImage extends Model
{
    use HasFactory,SoftDeletes;
    protected $guarded = ['id'];

    public function blog(){
        return $this->belongsTo(Blog::class);
    }

    public function getMediumAttribute() {
        return env('AWS_URL_ENDPOINT') . '/images/medium/' . $this->name;
    }

    public function getThumbnailAttribute() {
        return env('AWS_URL_ENDPOINT') . '/images/thumbnail/' . $this->name;
    }
}
