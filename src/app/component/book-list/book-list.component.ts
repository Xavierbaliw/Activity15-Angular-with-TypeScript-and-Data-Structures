import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: string[] = [];
  newBook: string = '';


  addBook() {
    if (this.newBook.trim()) {
      this.books.push(this.newBook.trim());
      this.newBook = '';
    }
  }


  getBooks(): string[] {
    return this.books;
  }
}
