import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private products: string[] = ['Keyboard', 'Mouse', 'Dongle'];

  addProduct(product: string) {
    this.products.push(product);
  }

  getProducts(): string[] {
    return this.products;
  }

  removeProduct(index: number) {
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}
