import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {
  private groceries: string[] = ['Milk', 'Eggs', 'Bread', 'Butter'];

  addGrocery(grocery: string) {
    this.groceries.push(grocery);
  }

  getGroceries(): string[] {
    return this.groceries;
  }

  removeGrocery(index: number) {
    if (index > -1) {
      this.groceries.splice(index, 1);
    }
  }
}
