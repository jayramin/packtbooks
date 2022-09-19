<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;
    public $timestamps = false;
    public function books() {
        // return $this->belongsToMany(Books::class);
        return $this->belongsToMany('App\Models\Books');
    }

}
