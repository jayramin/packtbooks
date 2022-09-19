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
