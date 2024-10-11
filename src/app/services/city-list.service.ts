import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityListService {
  private cities: string[] = ['Caloocan City', 'Makati'];

  addCity(city: string) {
    this.cities.push(city);
  }

  getCities(): string[] {
    return this.cities;
  }

  removeCity(index: number) {
    if (index > -1) {
      this.cities.splice(index, 1);
    }
  }
}
