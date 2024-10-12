import { Component } from '@angular/core';
import {BuildingListService} from "../../services/building-list.service";

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  newBuilding: string = '';

  constructor(private buildingListService: BuildingListService) {}

  addBuilding() {
    if (this.newBuilding.trim()) {
      this.buildingListService.addBuilding(this.newBuilding.trim());
      this.newBuilding = '';
    }
  }

  getBuildings(): string[] {
    return this.buildingListService.getBuildings();
  }

  removeItem(index: number) {
    this.buildingListService.removeBuilding(index);
  }
}
