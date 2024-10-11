import { Component } from '@angular/core';
import {BookListService} from "../../services/book-list.service";


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  newBook: string = '';

  constructor(private bookListService: BookListService) {}

  addBook() {
    if (this.newBook.trim()) {  // Check if the book name is not just whitespace
      this.bookListService.addBook(this.newBook.trim());
      this.newBook = ''; // Reset the input field
    }
  }

  getBooks(): string[] {
    return this.bookListService.getBooks();
  }

  removeItem(index: number) {
    this.bookListService.removeBook(index); // Call the remove method from service
  }
}
