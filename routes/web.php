<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/{any}', function () {
    return view('welcome'); // Ensure your welcome.blade.php loads the Vue app.
})->where('any', '.*');