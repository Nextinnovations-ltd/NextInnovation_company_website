<?php

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;

if (!function_exists('storeImage')) {
    function storeImage($image,$imageName) {
        // original image
        $disk = Storage::disk('s3');
        $originalImg = Image::read($image->path());
        $disk->put("images/original/{$imageName}", (string) $originalImg->encode(), 'public');

        // medium image
        $width = $originalImg->width();
        $height = $originalImg->height();
        $maxSize = 1000;

        if ($width > $height) {
            $newWidth = min($width, $maxSize);
            $newHeight = intval($height * ($newWidth / $width));
        } else {
            $newHeight = min($height, $maxSize);
            $newWidth = intval($width * ($newHeight / $height));
        }

        $mediumImg = $originalImg;
        $mediumImg->cover($newWidth, $newHeight);
        $disk->put("images/medium/{$imageName}", (string) $mediumImg->encode(), 'public');

        // thumbnail image
        $thumbImg = $originalImg;
        $thumbImg->cover(400, 300);
        $disk->put("images/thumbnail/{$imageName}", (string) $thumbImg->encode(), 'public');
    }
}

if (!function_exists('error')) {
    function error() {
        return response()->json([
            'errors' => [
                'message' => 'No data.',
            ],
        ], 404);
    }
}

if (!function_exists('dataWithPagination')) {
    function dataWithPagination($datas, $data) {
        return response()->json([
            "data" => $data,
            "links" => [
                "first" => $datas->url(1),
                "last" => $datas->url($datas->lastPage()),
                "prev" => $datas->previousPageUrl(),
                "next" => $datas->nextPageUrl()
                ],
            "meta" => [
                "current_page" => $datas->currentPage(),
                "last_page" => $datas->lastPage(),
                "from" => $datas->firstItem(),
                "to" => $datas->lastItem(),
                "path" => $datas->url($datas->currentPage()),
                "per_page" => $datas->perPage(),
                "total" => $datas->total()
                ]
        ],200);
    }
}
