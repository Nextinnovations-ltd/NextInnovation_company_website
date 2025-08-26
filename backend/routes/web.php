<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WorkController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;

Route::get('/storage-link', function () {
    Artisan::call('storage:link');
    return 'Storage link created successfully!';
});

Route::get('/s3-test', function(){
    try {
        $disk = Storage::disk('s3');

        logger('Trying to upload file to S3...');
        $result = $disk->put('test3.txt', 'S3 connection successful', 'public');

        logger('Put result: ' . ($result ? 'true' : 'false'));
        return 'S3 test done, check logs for details.';
    } catch (\Throwable $e) {
        logger($e);
        return 'S3 connection failed: ' . $e->getMessage();
    }
});

Route::prefix('admin')->group(function () {
    Route::middleware(['guest'])->controller(AuthController::class)->group(function () {
        Route::get('/login', 'loginForm')->name('loginForm');
        Route::post('/login', 'login')->name('login');

        Route::get('/forget-password', 'forgetPassword')->name('forgetPassword');
        Route::post('/send/mail', 'sendMail')->name('sendMail');
        Route::get('/verify/{token}', 'verifyMail')->name('verifyMail');
        Route::post('/verify/{token}', 'resetPassword')->name('resetPassword');
    });

    Route::middleware(['auth'])->group(function () {
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

        Route::controller(AuthController::class)->group(function() {
            Route::post('logout', 'logout')->name('logout');
            Route::get('change-password', 'changePassword')->name('changePassword');
            Route::put('change-password', 'updatePassword')->name('updatePassword');
        });

        Route::prefix('works')->controller(WorkController::class)->group(function () {
            Route::get('/', 'index')->name('works');
            Route::get('/create', 'create')->name('works.create');
            Route::post('/create', 'store')->name('works.store');
            Route::get('/edit/{work}', 'edit')->name('works.edit');
            Route::put('/update/{work}', 'update')->name('works.update');
            Route::delete('/delete/{work}', 'destroy')->name('works.delete');
        });

        Route::prefix('news')->controller(BlogController::class)->group(function () {
            Route::get('/', 'index')->name('news');
            Route::get('/create', 'create')->name('news.create');
            Route::post('/create', 'store')->name('news.store');
            Route::get('/edit/{blog}', 'edit')->name('news.edit');
            Route::put('/update/{blog}', 'update')->name('news.update');
            Route::delete('/delete/{blog}', 'destroy')->name('news.delete');

            Route::post('/create/image', 'createImage')->name('news.create.image');
            Route::post('/edit/create/image/{blogId}', 'editCreateImage')->name('news.edit.create.image');
            Route::get('/delete/image/{image}', 'deleteImage')->name('news.delete.image');
        });

        Route::prefix('users')->middleware(['admin'])->controller(UserController::class)->group(function () {
            Route::get('/', 'index')->name('users');
            Route::get('/create', 'create')->name('users.create');
            Route::post('/create', 'store')->name('users.store');
            Route::get('/edit/{user}', 'edit')->name('users.edit');
            Route::put('/update/{user}', 'update')->name('users.update');
            Route::delete('/delete/{user}', 'destroy')->name('users.delete')->middleware('admin_delete');
        });

        Route::prefix('contact')->controller(ContactController::class)->group(function () {
            Route::get('/', 'index')->name('contact');
            Route::get('/view/{contact}', 'show')->name('contact.view');
            Route::put('/done/{contact}', 'done')->name('contact.done');
        });
    });
});
