<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Books;
use Illuminate\Http\Request;

use App\Http\Traits\BooksTrait;
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    
    public function show(Books $books,Author $author){
        dd($this->BooksData());
        // $books = Books::with(['author', 'publisher'])->get();
        // foreach ($books as $book) {
        //     $AuthorName[] = $book->
        //     ->author_name;
        //     $AuthorName[] = $book->publisher->publisher_name;
        // }
        // dd($AuthorName);

        // $BooksWithAuthor = Books::with('authors')->get();
        //
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
