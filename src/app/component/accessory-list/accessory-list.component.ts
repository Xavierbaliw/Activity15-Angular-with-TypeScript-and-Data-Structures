import { Component } from '@angular/core';
import {AccessoryListService} from "../../services/accessory-list.service";

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
  newAccessory: string = '';

  constructor(private accessoryListService: AccessoryListService) {}

  addAccessory() {
    if (this.newAccessory.trim()) {
      this.accessoryListService.addAccessory(this.newAccessory.trim());
      this.newAccessory = '';
    }
  }

  getAccessories(): string[] {
    return this.accessoryListService.getAccessories();
  }

  removeItem(index: number) {
    this.accessoryListService.removeAccessory(index);
  }
}
