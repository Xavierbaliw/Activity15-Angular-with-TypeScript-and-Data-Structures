import { Component } from '@angular/core';
import {TourListService} from "../../services/tour-list.service";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  newTour: { name: string; date: string } = { name: '', date: '' };

  constructor(private tourListService: TourListService) {}

  addTour() {
    if (this.newTour.name.trim() && this.newTour.date.trim()) {
      this.tourListService.addTour(this.newTour);
      this.newTour = { name: '', date: '' };
    }
  }

  getTours(): { name: string; date: string }[] {
    return this.tourListService.getTours();
  }

  removeTour(index: number) {
    this.tourListService.removeTour(index);
  }
}
