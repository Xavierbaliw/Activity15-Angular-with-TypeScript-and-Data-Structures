import { Component } from '@angular/core';
import {FruitListService} from "../../services/fruit-list.service";

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  fruitName: string = '';

  constructor(private fruitListService: FruitListService) {}

  get fruitList(): string[] {
    return this.fruitListService.getFruitList();
  }

  addFruit(): void {
    this.fruitListService.addFruit(this.fruitName);
    this.fruitName = '';
  }

  removeFruit(index: number): void {
    this.fruitListService.removeFruit(index);
  }
}
