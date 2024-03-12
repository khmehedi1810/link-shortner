<?php

use App\Http\Controllers\LinkShorterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home'); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
});

Route::post('list-shortner', [LinkShorterController::class, 'store']);
Route::get('ly/{id}', [LinkShorterController::class, 'show']);
