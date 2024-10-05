import { Component } from '@angular/core';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  libraries: string[] = ['Netflix', 'Bili-bili'];
  newLibrary: string = '';

  // Add a new library to the list
  addLibrary() {
    if (this.newLibrary.trim() === '') {
      return;
    }
    this.libraries.push(this.newLibrary);
    this.newLibrary = '';
  }

  removeLibrary(index: number) {
    this.libraries.splice(index, 1);
  }
}
