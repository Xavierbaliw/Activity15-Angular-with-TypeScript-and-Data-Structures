import { Component } from '@angular/core';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
  accessories: string[] = ['Phone Case', 'Screen Protector', 'Wireless Charger', 'Earbuds'];
  newAccessory: string = '';

  addAccessory() {
    if (this.newAccessory.trim()) {
      this.accessories.push(this.newAccessory);
      this.newAccessory = '';
    }
  }

  removeAccessory(index: number) {
    this.accessories.splice(index, 1);
  }
}
