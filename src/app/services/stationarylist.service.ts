import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StationarylistService {
  private stationaryItems: string[] = ['Pencil', 'Notebook', 'Eraser'];

  addStationary(item: string) {
    this.stationaryItems.push(item);
  }

  getStationary(): string[] {
    return this.stationaryItems;
  }

  removeStationary(index: number) {
    if (index > -1) {
      this.stationaryItems.splice(index, 1);
    }
  }
}
