<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->text("description");
            $table->unsignedBigInteger("isbn");
            $table->string("image");
            $table->date("published");
            $table->foreignId('publisher_id')->constrained('publishers')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('genre_id')->constrained('genres')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('author_id')->constrained('authors')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
};
