import { Component } from '@angular/core';
import {GroceryListService} from "../../services/grocery-list.service";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  newGrocery: string = '';

  constructor(private groceryListService: GroceryListService) {}

  addGrocery() {
    if (this.newGrocery.trim()) {
      this.groceryListService.addGrocery(this.newGrocery.trim());
      this.newGrocery = '';
    }
  }

  getGroceries(): string[] {
    return this.groceryListService.getGroceries();
  }

  removeItem(index: number) {
    this.groceryListService.removeGrocery(index);
  }
}
