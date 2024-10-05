import { Component } from '@angular/core';

@Component({
  selector: 'app-mealplan-list',
  templateUrl: './mealplan-list.component.html',
  styleUrl: './mealplan-list.component.css'
})
export class MealplanListComponent {
  meals: string[] = ['Breakfast', 'Lunch', 'Dinner'];
  newMeal: string = '';

  addMeal() {
    if (this.newMeal.trim()) {
      this.meals.push(this.newMeal);
      this.newMeal = '';
    }
  }

  removeMeal(index: number) {
    this.meals.splice(index, 1);
  }
}
