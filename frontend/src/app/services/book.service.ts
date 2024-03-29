import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { BOOKS_BY_SEARCH_URL, BOOKS_BY_TAG_URL, BOOKS_TAGS_URL, BOOKS_URL, BOOK_BY_ID_URL } from '../shared/constants/urls';
import { Book } from '../shared/models/Book';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(BOOKS_URL);
  }

  getAllBooksBySearchTerm(searchTerm: string) {
    return this.http.get<Book[]>(BOOKS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(BOOKS_TAGS_URL);
  }

  getAllBooksByTag(tag: string): Observable<Book[]> {
    if(tag==="All"){
      location.replace('/');
      return this.getAll();
    }else{
      return this.http.get<Book[]>(BOOKS_BY_TAG_URL + tag);
    }
  }

  getBookById(bookId:string):Observable<Book>{
    return this.http.get<Book>(BOOK_BY_ID_URL + bookId);
  }

}
