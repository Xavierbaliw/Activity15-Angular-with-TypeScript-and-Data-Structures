import { Component } from '@angular/core';

class Country {
}

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  countryName: string = '';
  selectedContinent: string = '';


  countryList: { name: string; continent: string }[] = [
    { name: 'Philippines', continent: 'Asia' },
    { name: 'Indonesia', continent: 'Asia' },
    { name: 'Thailand', continent: 'Asia' },
  ];


  continents: string[] = ['Asia', 'Europe', 'Africa', 'North America', 'South America', 'Australia', 'Antarctica'];

  addCountry() {
    if (this.countryName.trim() && this.selectedContinent) {
      const newCountry = {
        name: this.countryName.trim(),
        continent: this.selectedContinent
      };
      this.countryList.push(newCountry);
      this.countryName = '';
      this.selectedContinent = '';
    } else {
      console.log('Please fill out all fields.');
    }
  }

  removeCountry(country: { name: string; continent: string }) {
    const index = this.countryList.indexOf(country);
    if (index > -1) {
      this.countryList.splice(index, 1);
    }
  }
}
