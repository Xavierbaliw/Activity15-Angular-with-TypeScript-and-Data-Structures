import { Component } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  // Array to hold the list of cities
  cities: string[] = [];

  // Variable to hold the new city input
  newCity: string = '';

  // Method to add a new city to the list
  addCity(): void {
    if (this.newCity.trim()) {
      this.cities.push(this.newCity.trim());
      this.newCity = ''; // Clear the input field
    } else {
      alert('Please enter a valid city name.');
    }
  }

  // Optional: Method to remove a city from the list
  removeCity(index: number): void {
    this.cities.splice(index, 1);
  }
}
