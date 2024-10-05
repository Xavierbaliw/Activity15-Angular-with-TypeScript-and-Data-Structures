import { Component } from '@angular/core';

@Component({
  selector: 'app-foodmenu-list',
  templateUrl: './foodmenu-list.component.html',
  styleUrl: './foodmenu-list.component.css'
})
export class FoodmenuListComponent {
  foodMenu: string[] = [
    'Pizza',
    'Burger',
    'Fries',
  ];

  newFoodItem: string = '';

  addFoodItem(): void {
    if (this.newFoodItem.trim()) {
      this.foodMenu.push(this.newFoodItem.trim());
      this.newFoodItem = '';
    } else {
      alert('Please enter a valid food item.');
    }
  }
  removeItem(index: number) {
    this.foodMenu.splice(index, 1);
  }
}
