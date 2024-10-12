import { Component } from '@angular/core';
import {LaptopListService} from "../../services/laptop-list.service";

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
  newLaptop: string = '';

  constructor(private laptopListService: LaptopListService) {}

  addLaptop() {
    if (this.newLaptop.trim()) {
      this.laptopListService.addLaptop(this.newLaptop.trim());
      this.newLaptop = '';
    }
  }

  getLaptops(): string[] {
    return this.laptopListService.getLaptops();
  }

  removeItem(index: number) {
    this.laptopListService.removeLaptop(index);
  }
}
