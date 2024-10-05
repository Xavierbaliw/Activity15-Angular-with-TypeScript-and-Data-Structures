import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  destinations: string[] = ['Paris', 'New York', 'Switzerland', 'London'];
  newDestination: string = '';

  addDestination() {
    if (this.newDestination.trim()) {
      this.destinations.push(this.newDestination.trim());
      this.newDestination = '';
    }
  }

  removeDestination(index: number) {
    this.destinations.splice(index, 1);
  }
}
