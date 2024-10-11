import { Component } from '@angular/core';
import {CityListService} from "../../services/city-list.service";


@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  newCity: string = '';

  constructor(private cityListService: CityListService) {}

  addCity() {
    if (this.newCity.trim()) {
      this.cityListService.addCity(this.newCity.trim());
      this.newCity = '';
    }
  }

  getCities(): string[] {
    return this.cityListService.getCities();
  }
  removeItem(index: number) {
    this.cityListService.removeCity(index);
  }
}
