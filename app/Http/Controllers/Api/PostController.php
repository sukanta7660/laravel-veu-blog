<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    public function categories()
    {
        return response()->json([
            'categories' => Category::all()
        ], 200);
    }

    public function store_post(Request $request)
    {
        $request->validate([
            'title' => 'required | string | max: 255',
            'body' => 'required',
            'categories' => 'required',
            'name' => 'max: 100 | unique:categories'
        ]);

        $post = Post::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title) . '-' . time(),
            'body' => $request->body,
            'user_id' => auth()->user()->id
        ]);

        $post->categories()->attach($request->categories);

        if ($request->name) {
            $category = Category::create([
                'name' => $request->name,
                'slug' => Str::slug($request->name),
            ]);

            $post->categories()->attach($category->id);
        }

        return response()->json([
            'message' => 'Post Successfully Stored'
        ], 200);
    }
}
