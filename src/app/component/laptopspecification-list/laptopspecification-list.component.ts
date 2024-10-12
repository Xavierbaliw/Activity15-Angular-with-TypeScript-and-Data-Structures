import { Component } from '@angular/core';
import {LaptopspecificationListService} from "../../services/laptopspecification-list.service";

@Component({
  selector: 'app-laptopspecification-list',
  templateUrl: './laptopspecification-list.component.html',
  styleUrl: './laptopspecification-list.component.css'
})
export class LaptopspecificationListComponent {
  newSpecification: string = '';

  constructor(private laptopSpecificationService: LaptopspecificationListService) {}

  addSpecification() {
    if (this.newSpecification.trim()) {
      this.laptopSpecificationService.addSpecification(this.newSpecification.trim());
      this.newSpecification = '';
    }
  }

  getSpecifications(): string[] {
    return this.laptopSpecificationService.getSpecifications();
  }

  removeItem(index: number) {
    this.laptopSpecificationService.removeSpecification(index);
  }
}
