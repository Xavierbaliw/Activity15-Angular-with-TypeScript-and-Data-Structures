import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {
  private countries: string[] = ['Philippines','Indonesia','Thailand'];

  addCountry(country: string) {
    this.countries.push(country);
  }

  getCountries(): string[] {
    return this.countries;
  }

  removeCountry(index: number) {
    if (index > -1) {
      this.countries.splice(index, 1);
    }
  }
}
