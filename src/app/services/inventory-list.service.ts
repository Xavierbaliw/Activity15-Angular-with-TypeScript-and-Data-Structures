import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryListService {
  private inventoryItems: string[] = ['Patty', 'Bans', 'Sauce'];

  addInventoryItem(item: string) {
    this.inventoryItems.push(item);
  }

  getInventoryItems(): string[] {
    return this.inventoryItems;
  }

  removeInventoryItem(index: number) {
    if (index > -1) {
      this.inventoryItems.splice(index, 1);
    }
  }
}
