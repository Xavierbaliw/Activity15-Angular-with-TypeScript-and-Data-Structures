import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  inventory: string[] = ['Patty', 'Bans', 'Sauce'];
  newItem: string = '';

  addItem() {
    if (this.newItem) {
      this.inventory.push(this.newItem);
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.inventory.splice(index, 1);
  }
}
