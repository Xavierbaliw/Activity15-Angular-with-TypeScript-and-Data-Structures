import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodel-list',
  templateUrl: './carmodel-list.component.html',
  styleUrl: './carmodel-list.component.css'
})
export class CarmodelListComponent {
  carModels: string[] = ['Toyota','VIOS'];
  newCarModel: string = '';

  addCarModel() {
    if (this.newCarModel.trim()) {
      this.carModels.push(this.newCarModel.trim());
      this.newCarModel = '';
    }
  }
  removeItem(index: number) {
    this.carModels.splice(index, 1);
  }
}
