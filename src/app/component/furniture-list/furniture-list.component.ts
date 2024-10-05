import { Component } from '@angular/core';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {

  furnitureItems: string[] = ['TV Stand', 'Coffee Table', 'Bookshelf', 'Computer Table'];

  newItem: string = '';

  addFurniture() {
    if (this.newItem) {
      this.furnitureItems.push(this.newItem);
      this.newItem = '';
    }
  }

  removeFurniture(index: number) {
    this.furnitureItems.splice(index, 1);
  }
}
