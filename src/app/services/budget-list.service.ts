import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetListService {

  private budgetItems: { name: string; amount: number }[] = [];

  addBudgetItem(newItem: { name: string; amount: number }) {
    this.budgetItems.push(newItem);
  }

  removeBudgetItem(index: number) {
    this.budgetItems.splice(index, 1);
  }

  getBudgetItems(): { name: string; amount: number }[] {
    return this.budgetItems;
  }
}

