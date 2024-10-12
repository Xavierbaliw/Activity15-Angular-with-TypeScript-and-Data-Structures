import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalListService {
  private animals: string[] = ['Lion', 'Tiger', 'Monkey', 'Horse', 'Puma'];

  addAnimal(animal: string) {
    this.animals.push(animal);
  }

  getAnimals(): string[] {
    return this.animals;
  }

  removeAnimal(index: number) {
    if (index > -1) {
      this.animals.splice(index, 1);
    }
  }
}
