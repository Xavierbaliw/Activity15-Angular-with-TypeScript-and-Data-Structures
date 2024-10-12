import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildingListService {
  private buildings: string[] = ['Library', 'University Hall', 'Science Building'];

  addBuilding(building: string) {
    this.buildings.push(building);
  }

  getBuildings(): string[] {
    return this.buildings;
  }

  removeBuilding(index: number) {
    if (index > -1) {
      this.buildings.splice(index, 1);
    }
  }
}
