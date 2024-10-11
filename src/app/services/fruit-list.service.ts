import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitListService {
  private fruits: string[] = [];

  addFruit(fruitName: string): void {
    if (fruitName) {
      this.fruits.push(fruitName);
    }
  }

  removeFruit(index: number): void {
    this.fruits.splice(index, 1);
  }

  getFruitList(): string[] {
    return this.fruits;
  }
}
