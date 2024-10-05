import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  groceryItems: string[] = ['Milk', 'Eggs', 'Bread', 'Butter'];
  newItem: string = '';

  addItem() {
    if (this.newItem) {
      this.groceryItems.push(this.newItem);
      this.newItem = '';
    }
  }
  removeItem(index: number) {
    this.groceryItems.splice(index, 1);
  }
}

