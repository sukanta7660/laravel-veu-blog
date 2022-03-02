<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
});

Route::middleware(['auth:sanctum'])->group(function () {

    Route::get('/authenticated', function(){
        return true;
    });

    Route::get('/user', function(Request $request){
        return $request->user();
    });

    Route::post('/store-post', [PostController::class, 'store_post']);

});

Route::get('categories', [PostController::class, 'categories']);
