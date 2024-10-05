import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
  itemName: string = '';
  itemAmount: number | null = null;


  budgetList: { name: string; amount: number }[] = [
    { name: 'Shopping', amount: 500 },
  ];

  addBudgetItem() {
    if (this.itemName.trim() && this.itemAmount !== null) {
      const newItem = {
        name: this.itemName.trim(),
        amount: this.itemAmount,
      };
      this.budgetList.push(newItem);

      this.itemName = '';
      this.itemAmount = null;
    } else {
      console.log('Please enter both item name and amount.');
    }
  }

  removeBudgetItem(item: { name: string; amount: number }) {
    const index = this.budgetList.indexOf(item);
    if (index > -1) {
      this.budgetList.splice(index, 1);
    }
  }
}
