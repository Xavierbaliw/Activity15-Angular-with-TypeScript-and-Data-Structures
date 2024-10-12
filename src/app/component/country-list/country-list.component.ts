import { Component } from '@angular/core';
import {CountryListService} from "../../services/country-list.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  newCountry: string = '';

  constructor(private countryListService: CountryListService) {}

  addCountry() {
    if (this.newCountry.trim()) {
      this.countryListService.addCountry(this.newCountry.trim());
      this.newCountry = '';
    }
  }

  getCountries(): string[] {
    return this.countryListService.getCountries();
  }

  removeCountry(index: number) {
    this.countryListService.removeCountry(index);
  }
}
