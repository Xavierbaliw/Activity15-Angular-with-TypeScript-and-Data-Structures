import { Component } from '@angular/core';
import {MealplanListService} from "../../services/mealplan-list.service";

@Component({
  selector: 'app-mealplan-list',
  templateUrl: './mealplan-list.component.html',
  styleUrl: './mealplan-list.component.css'
})
export class MealplanListComponent {
  newMeal: string = '';

  constructor(private mealService: MealplanListService) {}

  addMeal() {
    if (this.newMeal.trim()) {
      this.mealService.addMeal(this.newMeal.trim());
      this.newMeal = '';
    }
  }

  getMeals(): string[] {
    return this.mealService.getMeals();
  }

  removeMeal(index: number) {
    this.mealService.removeMeal(index);
  }
}
