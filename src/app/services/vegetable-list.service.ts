import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VegetableListService {
  private vegetables: string[] = ['Carrot', 'Potato', 'Tomato', 'Cucumber'];

  addVegetable(vegetable: string) {
    this.vegetables.push(vegetable);
  }

  getVegetables(): string[] {
    return this.vegetables;
  }

  removeVegetable(index: number) {
    if (index > -1) {
      this.vegetables.splice(index, 1);
    }
  }
}
