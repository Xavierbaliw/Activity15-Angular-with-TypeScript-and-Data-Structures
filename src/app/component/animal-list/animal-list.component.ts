import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  animals: string[] = ['Lion', 'Tiger', 'Monkey', 'Horse', 'Puma'];
  newAnimal: string = '';

  addAnimal() {
    if (this.newAnimal) {
      this.animals.push(this.newAnimal);
      this.newAnimal = '';
    }
  }
  removeItem(index: number) {
    this.animals.splice(index, 1);
  }
}
