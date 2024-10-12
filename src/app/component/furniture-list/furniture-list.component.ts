import { Component } from '@angular/core';
import {FurnitureListService} from "../../services/furniture-list.service";

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
  newFurniture: string = '';

  constructor(private furnitureListService: FurnitureListService) {}

  addFurniture() {
    if (this.newFurniture.trim()) {
      this.furnitureListService.addFurniture(this.newFurniture.trim());
      this.newFurniture = '';
    }
  }

  getFurnitures(): string[] {
    return this.furnitureListService.getFurnitures();
  }

  removeItem(index: number) {
    this.furnitureListService.removeFurniture(index);
  }
}
