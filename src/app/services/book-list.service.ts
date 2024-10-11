import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  private books: string[] = [];

  addBook(book: string) {
    this.books.push(book);
  }

  getBooks(): string[] {
    return this.books;
  }

  removeBook(index: number) {
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }
}
