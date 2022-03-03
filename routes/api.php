<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PostController;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
});

Route::middleware(['auth:sanctum'])->group(function () {

    Route::get('/authenticated', function () {
        return true;
    });

    Route::get('/user', function () {
        return response()->json([
            'auth_user' => auth()->user(),
            'posts' => Post::whereUser_id(auth()->user()->id)->with('user')->get()
        ]);
    });

    Route::post('/store-post', [PostController::class, 'store_post']);
    Route::get('/delete-post/{id}', [PostController::class, 'delete_post']);
});

Route::get('/all-posts', [PostController::class, 'all_posts']);
Route::get('categories', [PostController::class, 'categories']);
