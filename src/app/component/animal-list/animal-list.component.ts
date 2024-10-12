import { Component } from '@angular/core';
import {AnimalListService} from "../../services/animal-list.service";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  newAnimal: string = '';

  constructor(private animalListService: AnimalListService) {}

  addAnimal() {
    if (this.newAnimal.trim()) {
      this.animalListService.addAnimal(this.newAnimal.trim());
      this.newAnimal = '';
    }
  }

  getAnimals(): string[] {
    return this.animalListService.getAnimals();
  }

  removeItem(index: number) {
    this.animalListService.removeAnimal(index);
  }
}
