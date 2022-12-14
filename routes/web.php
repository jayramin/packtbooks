<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/books', function () {
    return Inertia::render('Books');
})->middleware(['auth', 'verified'])->name('books');
Route::get('/addnewbook', function () {
    return Inertia::render('AddNewBooks');
})->middleware(['auth', 'verified'])->name('addnewbook');


Route::get('/author', function () {
    return Inertia::render('Author');
})->middleware(['auth', 'verified'])->name('author');
Route::get('/genre', function () {
    return Inertia::render('Genre');
})->middleware(['auth', 'verified'])->name('genre');
Route::get('/publisher', function () {
    return Inertia::render('Publisher');
})->middleware(['auth', 'verified'])->name('publisher');

require __DIR__.'/auth.php';
