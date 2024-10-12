import { Component } from '@angular/core';
import {VegetableListService} from "../../services/vegetable-list.service";

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  newVegetable: string = '';

  constructor(private vegetableListService: VegetableListService) {}

  addVegetable() {
    if (this.newVegetable.trim()) {
      this.vegetableListService.addVegetable(this.newVegetable.trim());
      this.newVegetable = '';
    }
  }

  getVegetables(): string[] {
    return this.vegetableListService.getVegetables();
  }

  removeItem(index: number) {
    this.vegetableListService.removeVegetable(index);
  }
}
