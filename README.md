for use this project follow below command

1) npm i
2)composer update
3)php artisan migrate
4)php artisan db:seed



for data base there is a SQL file named as 



initial step by step instation for creating new application  
Step 1: composer create-project laravel/laravel packtbookstore




Migration 

1) php artisan make:model Publisher -mcr
2) php artisan make:model Author -mcr
3) php artisan make:model Genre -mcr
4) php artisan make:model Books -mcr
5) php artisan migrate


====================== Books Migration File Example START =======================
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

====================== Books Migration File Example END =======================



After Generating Migsration and Creating Tables in DB we can use Laravel Seeder for Testing Data


=> php artisan make:seeder Author
=> php artisan make:seeder Genre
=> php artisan make:seeder Publisher
=> php artisan make:seeder Books


======================   Books Seeder Example START =====================

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class Books extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i = 0; $i < 20; $i++) {
            \DB::table('books')->insert([
                'title' => $faker->title,
                'description' => $faker->paragraphs($nbSentences = 3, $variableNbSentences = true),
                'isbn' => $faker->isbn13,
                'image' => $faker->image,
                'published' => date('Y-m-d H:i:s'),
                'genre_id' => $faker->numberBetween($min = 1, $max = 20) ,
                'author_id' => $faker->numberBetween($min = 1, $max = 20),
                'publisher_id' => $faker->numberBetween($min = 1, $max = 20),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
        }
        //
    }
}
======================   Books Seeder Example END =====================
