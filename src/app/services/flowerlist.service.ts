import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowerlistService {
  private flowers: string[] = ['Roses', 'Tulips', 'Daisies'];

  addFlower(flower: string) {
    this.flowers.push(flower);
  }

  getFlowers(): string[] {
    return this.flowers;
  }

  removeFlower(index: number) {
    if (index > -1) {
      this.flowers.splice(index, 1);
    }
  }
}
