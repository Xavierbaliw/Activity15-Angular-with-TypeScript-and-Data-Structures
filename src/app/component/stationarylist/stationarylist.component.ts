import { Component } from '@angular/core';
import {StationarylistService} from "../../services/stationarylist.service";

@Component({
  selector: 'app-stationarylist',
  templateUrl: './stationarylist.component.html',
  styleUrl: './stationarylist.component.css'
})
export class StationarylistComponent {
  newStationary: string = '';

  constructor(private stationaryListService: StationarylistService) {}

  addStationary() {
    if (this.newStationary.trim()) {
      this.stationaryListService.addStationary(this.newStationary.trim());
      this.newStationary = '';
    }
  }

  getStationary(): string[] {
    return this.stationaryListService.getStationary();
  }

  removeItem(index: number) {
    this.stationaryListService.removeStationary(index);
  }
}
