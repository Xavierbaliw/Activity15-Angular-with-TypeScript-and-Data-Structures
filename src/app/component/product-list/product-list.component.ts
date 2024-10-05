import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: string[] = ['Keyboard', 'Mouse', 'Dongle'];
  newProduct: string = '';


    addProduct() {
      if (this.newProduct) {
        this.products.push(this.newProduct);
        this.newProduct = '';
      }
    }
    removeItem(index: number) {
      this.products.splice(index, 1);
  }
}
