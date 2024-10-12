import { Component } from '@angular/core';
import {FoodmenuListService} from "../../services/foodmenu-list.service";

@Component({
  selector: 'app-foodmenu-list',
  templateUrl: './foodmenu-list.component.html',
  styleUrl: './foodmenu-list.component.css'
})
export class FoodmenuListComponent {
  newFood: string = '';

  constructor(private foodMenuService: FoodmenuListService) {}

  addFood() {
    if (this.newFood.trim()) {
      this.foodMenuService.addFood(this.newFood.trim());
      this.newFood = '';
    }
  }

  getFoods(): string[] {
    return this.foodMenuService.getFoods();
  }

  removeItem(index: number) {
    this.foodMenuService.removeFood(index);
  }
}
