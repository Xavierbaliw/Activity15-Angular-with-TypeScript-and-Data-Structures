import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationListService {
  private destinations: string[] = ['Paris', 'New York', 'Switzerland', 'London'];

  addDestination(destination: string) {
    this.destinations.push(destination);
  }

  getDestinations(): string[] {
    return this.destinations;
  }

  removeDestination(index: number) {
    if (index > -1) {
      this.destinations.splice(index, 1);
    }
  }
}
