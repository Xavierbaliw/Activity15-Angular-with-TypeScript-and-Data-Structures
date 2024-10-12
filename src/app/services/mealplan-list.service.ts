import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealplanListService {
  private meals: string[] = ['Breakfast', 'Lunch', 'Dinner'];

  addMeal(meal: string) {
    this.meals.push(meal);
  }

  getMeals(): string[] {
    return this.meals;
  }

  removeMeal(index: number) {
    if (index > -1) {
      this.meals.splice(index, 1);
    }
  }
}
