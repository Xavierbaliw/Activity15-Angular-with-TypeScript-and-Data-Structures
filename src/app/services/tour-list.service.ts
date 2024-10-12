import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourListService {
  private tourItems: { name: string; date: string }[] = [];

  addTour(newTour: { name: string; date: string }) {
    this.tourItems.push(newTour);
  }

  removeTour(index: number) {
    this.tourItems.splice(index, 1);
  }

  getTours(): { name: string; date: string }[] {
    return this.tourItems;
  }
}
