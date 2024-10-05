import { Component } from '@angular/core';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrl: './sport-list.component.css'
})
export class SportListComponent {
  // Initialize the sports list
  sports: string[] = ['Soccer', 'Basketball', 'Tennis', 'Baseball', 'Cricket'];
  newSport: string = '';

  // Function to add a new sport to the list
  addSport(): void {
    if (this.newSport.trim()) {
      this.sports.push(this.newSport.trim());
      this.newSport = ''; // Clear the input after adding
    }
  }

  // Function to fetch sports
  getSports(): string[] {
    return this.sports;
  }
}
