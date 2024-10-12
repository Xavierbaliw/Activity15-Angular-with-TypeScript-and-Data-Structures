import { Component } from '@angular/core';
import {FlowerlistService} from "../../services/flowerlist.service";

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {
  newFlower: string = '';

  constructor(private flowerListService: FlowerlistService) {}

  addFlower() {
    if (this.newFlower.trim()) {
      this.flowerListService.addFlower(this.newFlower.trim());
      this.newFlower = '';
    }
  }

  getFlowers(): string[] {
    return this.flowerListService.getFlowers();
  }

  removeItem(index: number) {
    this.flowerListService.removeFlower(index);
  }
}
