import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  vegetables: string[] = ['Carrot', 'Potato', 'Tomato', 'Cucumber'];
  newVegetable: string = '';

  addVegetable() {
    if (this.newVegetable.trim() !== '') {
      this.vegetables.push(this.newVegetable);
      this.newVegetable = '';  // Clear the input after adding
    }
  }
  removeItem(index: number) {
    this.vegetables.splice(index, 1);
  }
}
