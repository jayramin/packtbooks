<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\BooksController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/allproducts', [App\Http\Controllers\BooksController::class, 'show']);
Route::get('/allpublisher', [App\Http\Controllers\PublisherController::class, 'show']);
Route::get('/allauthors', [App\Http\Controllers\AuthorController::class, 'show']);
Route::get('/allgenre', [App\Http\Controllers\GenreController::class, 'show']);
Route::any('/imageupload', [App\Http\Controllers\BooksController::class, 'imageupload']);
Route::post('/addnewbook', [App\Http\Controllers\BooksController::class, 'store']);
Route::post('/addnewpublisher', [App\Http\Controllers\PublisherController::class, 'store']);
Route::post('/addnewgenre', [App\Http\Controllers\GenreController::class, 'store']);
Route::post('/addnewauthors', [App\Http\Controllers\AuthorController::class, 'store']);
// Route::post('/addnewbook', function (Request $request) {
//     echo "called";
// });
