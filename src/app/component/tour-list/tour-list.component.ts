import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  title = 'TV Tour List';
  tourDates: string[] = ['2024-10-15 - Quezon'];
  newDate: string = '';

  addTourDate(): void {
    if (this.newDate) {
      this.tourDates.push(this.newDate);
      this.newDate = '';
    }
  }

  removeTourDate(index: number): void {
    this.tourDates.splice(index, 1);
  }
}
