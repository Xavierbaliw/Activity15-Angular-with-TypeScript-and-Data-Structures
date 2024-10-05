import { Component } from '@angular/core';

@Component({
  selector: 'app-stationarylist',
  templateUrl: './stationarylist.component.html',
  styleUrl: './stationarylist.component.css'
})
export class StationarylistComponent {
  stationeryList: string[] = ['Pencil', 'Notebook', 'Eraser'];

  newItem: string = '';

  addItem(): void {
    if (this.newItem.trim()) {
      this.stationeryList.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeItem(index: number): void {
    this.stationeryList.splice(index, 1);
  }
}
