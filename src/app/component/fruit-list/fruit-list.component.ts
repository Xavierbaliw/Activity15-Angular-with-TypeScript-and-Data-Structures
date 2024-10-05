import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  fruitName: string = '';
  fruitList: string[] = [];


  addFruit(): void {
    if (this.fruitName) {
      this.fruitList.push(this.fruitName);
      this.fruitName = '';
    }
  }

  removeFruit(index: number): void {
    this.fruitList.splice(index, 1);
  }
}
