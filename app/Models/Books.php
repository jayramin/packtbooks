<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Books extends Model{
    use HasFactory;
    public function author(){
        return $this->belongsTo('App\Models\Author');
    }
    public function publisher(){
        return $this->belongsTo('App\Models\Publisher');
    }
    public function genre(){
        return $this->belongsTo('App\Models\Genre');
    }
}
