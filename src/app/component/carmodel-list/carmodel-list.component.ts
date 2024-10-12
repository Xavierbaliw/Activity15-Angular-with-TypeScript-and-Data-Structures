import { Component } from '@angular/core';
import {CarmodelListService} from "../../services/carmodel-list.service";

@Component({
  selector: 'app-carmodel-list',
  templateUrl: './carmodel-list.component.html',
  styleUrl: './carmodel-list.component.css'
})
export class CarmodelListComponent {
  newCarModel: string = '';

  constructor(private carModelListService: CarmodelListService) {}

  addCarModel() {
    if (this.newCarModel.trim()) {
      this.carModelListService.addCarModel(this.newCarModel.trim());
      this.newCarModel = '';
    }
  }

  getCarModels(): string[] {
    return this.carModelListService.getCarModels();
  }

  removeModel(index: number) {
    this.carModelListService.removeCarModel(index);
  }
}
