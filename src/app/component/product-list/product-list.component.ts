import { Component } from '@angular/core';
import {ProductListService} from "../../services/product-list.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  newProduct: string = '';

  constructor(private productListService: ProductListService) {}

  addProduct() {
    if (this.newProduct.trim()) {
      this.productListService.addProduct(this.newProduct.trim());
      this.newProduct = '';
    }
  }

  getProducts(): string[] {
    return this.productListService.getProducts();
  }

  removeItem(index: number) {
    this.productListService.removeProduct(index);
  }
}
