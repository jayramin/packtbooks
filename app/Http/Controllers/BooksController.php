<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Books;
use Illuminate\Http\Request;

use App\Http\Traits\BooksTrait;
use Validator;

class BooksController extends Controller
{
    use BooksTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function imageupload(Request $request)
    {
        $image = $request->file('image');
        if ($request->hasFile('image')) {
            $new_name = rand() . "." . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $new_name);
            return response()->json($new_name);
        } else {
            return response()->json("image null");
        }
    }
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Books $books)
    {
        $books->title = $request->title;
        $books->description = $request->description;
        $books->isbn = $request->isbn;
        $books->image = "default.jpg";
        $books->published = date("Y-m-d");
        $books->publisher_id = $request->publisher_id;
        $books->genre_id = $request->genre_id;
        $books->author_id  = $request->author_id;
        $books->save();
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */

    public function show(Books $books, Author $author)
    {
        // dd($this->BooksData());
        return $this->BooksData();
        // $BooksArray = $this->BooksData();
        // $BooksPaginate = $BooksArray::paginate(10);
        // return $BooksPaginate;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function edit(Books $books)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Books $books)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function destroy(Books $books)
    {
        //
    }
}
