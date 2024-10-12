import { Component } from '@angular/core';
import {InventoryListService} from "../../services/inventory-list.service";

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  newInventoryItem: string = '';

  constructor(private inventoryListService: InventoryListService) {}

  addInventoryItem() {
    if (this.newInventoryItem.trim()) {
      this.inventoryListService.addInventoryItem(this.newInventoryItem.trim());
      this.newInventoryItem = '';
    }
  }

  getInventoryItems(): string[] {
    return this.inventoryListService.getInventoryItems();
  }

  removeItem(index: number) {
    this.inventoryListService.removeInventoryItem(index);
  }
}
