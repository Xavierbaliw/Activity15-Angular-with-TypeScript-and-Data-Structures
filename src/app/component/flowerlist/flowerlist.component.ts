import { Component } from '@angular/core';

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {
  flowerList: string[];
  newFlower: string;

  constructor() {
    this.flowerList = ['Roses', 'Tulips', 'Daisies'];
    this.newFlower = '';
  }

  addFlower(): void {
    if (this.newFlower) {
      this.flowerList.push(this.newFlower);
      this.newFlower = '';
    }
  }

  removeFlower(flower: string): void {
    this.flowerList = this.flowerList.filter(item => item !== flower);
  }
}
