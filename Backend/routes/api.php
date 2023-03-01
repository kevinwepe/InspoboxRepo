<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//controller

use App\Http\Controllers\Auth\AuthenticationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix'=>'/auth']  , function($router) {
    Route::post('/login' , [AuthenticationController::class, 'login']);
    Route::post('/register' , [AuthenticationController::class,'register']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

