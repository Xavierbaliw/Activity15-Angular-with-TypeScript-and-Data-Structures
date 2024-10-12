import { Component } from '@angular/core';
import {BudgetListService} from "../../services/budget-list.service";

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
  newBudgetItem: { name: string; amount: number } = { name: '', amount: 0 };

  constructor(private budgetService: BudgetListService) {}

  addBudgetItem() {
    if (this.newBudgetItem.name.trim() && this.newBudgetItem.amount > 0) {
      this.budgetService.addBudgetItem(this.newBudgetItem);
      this.newBudgetItem = { name: '', amount: 0 };
    }
  }

  getBudgetItems(): { name: string; amount: number }[] {
    return this.budgetService.getBudgetItems();
  }

  removeItem(index: number) {
    this.budgetService.removeBudgetItem(index);
  }
}
