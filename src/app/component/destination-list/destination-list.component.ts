import { Component } from '@angular/core';
import {DestinationListService} from "../../services/destination-list.service";

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  newDestination: string = '';

  constructor(private destinationListService: DestinationListService) {}

  addDestination() {
    if (this.newDestination.trim()) {
      this.destinationListService.addDestination(this.newDestination.trim());
      this.newDestination = '';
    }
  }

  getDestinations(): string[] {
    return this.destinationListService.getDestinations();
  }

  removeItem(index: number) {
    this.destinationListService.removeDestination(index);
  }
}
