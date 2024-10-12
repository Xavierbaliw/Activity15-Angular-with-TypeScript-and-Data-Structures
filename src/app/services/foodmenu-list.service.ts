import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodmenuListService {
  private foods: string[] = ['Pizza', 'Burger', 'Fries'];

  addFood(food: string) {
    this.foods.push(food);
  }

  getFoods(): string[] {
    return this.foods;
  }

  removeFood(index: number) {
    if (index > -1) {
      this.foods.splice(index, 1);
    }
  }
}
