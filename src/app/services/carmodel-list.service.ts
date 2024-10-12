import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarmodelListService {
  private carModels: string[] = ['Toyota Camry', 'Honda Accord'];

  addCarModel(carModel: string) {
    this.carModels.push(carModel);
  }

  getCarModels(): string[] {
    return this.carModels;
  }

  removeCarModel(index: number) {
    if (index > -1) {
      this.carModels.splice(index, 1);
    }
  }
}
