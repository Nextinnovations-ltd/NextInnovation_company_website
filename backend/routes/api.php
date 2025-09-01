<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\WorkController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\BlogCategoryController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/contact/validation', [ContactController::class, 'contactValidation']);
Route::post('/contact', [ContactController::class, 'store']);
Route::get('/works', [WorkController::class, 'getWorkApi']);
Route::get('/last-two-works/', [WorkController::class, 'latestTwo']);
Route::get('/news', [BlogController::class, 'getBlogApi']);
Route::get('/news/category', [BlogCategoryController::class, 'getBlogCategoryApi']);
Route::get('/news/{id}', [BlogController::class, 'show']);
Route::post('/visiter/{page}', [DashboardController::class, 'visiterApi']);

