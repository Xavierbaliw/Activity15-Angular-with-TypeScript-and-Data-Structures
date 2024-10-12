import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptopspecificationListService {
  private specifications: string[] = ['Intel Core i7, 16GB RAM, 512GB SSD',
    'AMD Ryzen 5, 8GB RAM, 1TB HDD',
    'Apple M1, 8GB RAM, 256GB SSD'];

  addSpecification(specification: string) {
    this.specifications.push(specification);
  }

  getSpecifications(): string[] {
    return this.specifications;
  }

  removeSpecification(index: number) {
    if (index > -1) {
      this.specifications.splice(index, 1);
    }
  }
}
