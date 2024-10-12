import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessoryListService {
  private accessories: string[] = ['Phone Case', 'Screen Protector', 'Wireless Charger', 'Earbuds'];

  addAccessory(accessory: string) {
    this.accessories.push(accessory);
  }

  getAccessories(): string[] {
    return this.accessories;
  }

  removeAccessory(index: number) {
    if (index > -1) {
      this.accessories.splice(index, 1);
    }
  }
}
