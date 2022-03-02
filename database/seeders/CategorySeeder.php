<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'Laravel',
                'slug' => Str::slug('Laravel'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'ReactJs',
                'slug' => Str::slug('ReactJs'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'VueJs',
                'slug' => Str::slug('VueJs'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'MongoDb',
                'slug' => Str::slug('MongoDb'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'NoSQL',
                'slug' => Str::slug('NoSQL'),
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ];

        Category::insert($categories);
    }
}
