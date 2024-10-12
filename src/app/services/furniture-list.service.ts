import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FurnitureListService {
  private furnitures: string[] = ['TV Stand', 'Coffee Table', 'Bookshelf', 'Computer Table'];

  addFurniture(furniture: string) {
    this.furnitures.push(furniture);
  }

  getFurnitures(): string[] {
    return this.furnitures;
  }

  removeFurniture(index: number) {
    if (index > -1) {
      this.furnitures.splice(index, 1);
    }
  }
}
