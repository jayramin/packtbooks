<?php
namespace App\Http\Traits;
use App\Models\Books;
use \Illuminate\Pagination\Paginator;

trait BooksTrait {
    public function BooksData() {
        $books = Books::with(['author', 'publisher','genre'])->get();
        foreach ($books as $book) {
            $BooksData[] =(object)array("id"=>$book->id,
            "title"=>$book->title,
            "author_name"=>$book->author->author_name,
            "genre"=>$book->genre->title,
            "description"=>$book->description,
            "isbn"=>$book->isbn,
            "image"=>$book->image,
            "published"=>$book->published,
            "publisher"=>$book->publisher->publisher_name,
            );
        }
        $BooksPaginateData = new Paginator($BooksData, 10);
        return $BooksPaginateData;
        return $BooksData->paginate(10)->toArray();
    }
}

?>