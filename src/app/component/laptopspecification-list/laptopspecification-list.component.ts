import { Component } from '@angular/core';

@Component({
  selector: 'app-laptopspecification-list',
  templateUrl: './laptopspecification-list.component.html',
  styleUrl: './laptopspecification-list.component.css'
})
export class LaptopspecificationListComponent {
  laptopSpecs: string[] = [
    'Intel Core i7, 16GB RAM, 512GB SSD',
    'AMD Ryzen 5, 8GB RAM, 1TB HDD',
    'Apple M1, 8GB RAM, 256GB SSD'
  ];

  newSpec: string = '';

  addSpec(): void {
    if (this.newSpec.trim()) {
      this.laptopSpecs.push(this.newSpec.trim());
      this.newSpec = '';
    }
  }

  removeSpec(index: number): void {
    this.laptopSpecs.splice(index, 1);
  }
}
