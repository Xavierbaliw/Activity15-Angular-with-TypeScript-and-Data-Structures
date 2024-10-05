import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodel-list',
  templateUrl: './carmodel-list.component.html',
  styleUrl: './carmodel-list.component.css'
})
export class CarmodelListComponent {
  carModels: string[] = [];
  newCarModel: string = '';

  addCarModel() {
    if (this.newCarModel.trim()) {
      this.carModels.push(this.newCarModel.trim());
      this.newCarModel = '';
    }
  }
}
