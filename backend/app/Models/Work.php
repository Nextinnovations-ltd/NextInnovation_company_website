<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Work extends Model
{
    use HasFactory,SoftDeletes;
    protected $guarded = ['id'];

    protected $casts = [
        'language' => 'array',
        'category' => 'array',
    ];

    public function getMediumAttribute() {
        return env('AWS_URL_ENDPOINT').'/images/medium/'.$this->image;
    }

    public function getThumbnailAttribute() {
        return env('AWS_URL_ENDPOINT').'/images/thumbnail/'.$this->image;
    }

    public function getLanguageNameAttribute() {
        $languageName = [];
        $language = $this->language;
        foreach ($language as $value) {
            $name = match ($value) {
                '1' => 'Python',
                '2' => 'PHP',
                '3' => 'Laravel',
                '4' => 'Wordpress',
                '5' => 'React Js',
                '6' => 'Next Js',
                '7' => 'Django',
                '8' => 'Vue Js',
                default => 'Unknown',
            };
            $languageName[] = $name;
        }
        return $languageName;
    }

    public function getCategoryNameAttribute() {
        $categoryName = [];
        $category = $this->category;
        foreach ($category as $value) {
            $name = match ($value) {
                '1' => 'Web Development',
                '2' => 'System Development',
                '3' => 'UI/UX',
                '4' => 'EOR',
                '5' => 'Testing',
                default => 'Unknown',
            };
            $categoryName[] = $name;
        }
        return $categoryName;
    }

    public function scopeFilter($query, $filter) {
        $query->when($filter['search'] ?? false, function($query,$search) {
            $query->where(function ($query) use ($search) {
                $query->where('title', 'LIKE', '%' . $search . '%')
                    ->orWhere('id',$search);
            });
        });
        $query->when($filter['category'] ?? false, function($query,$category) {
            $query->whereJsonContains('category',$category);
        });
        $query->when($filter['language'] ?? false, function($query,$language) {
            $query->whereJsonContains('language',$language);
        });
    }

    public function getTitleLimitAttribute() {
        return Str::limit($this->title, 60, '...');
    }
}
