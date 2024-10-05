import { Component } from '@angular/core';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  buildings: string[] = ['Library', 'University Hall', 'Science Building'];
  newBuilding: string = '';

  addBuilding(): void {
    if (this.newBuilding.trim()) {
      this.buildings.push(this.newBuilding);
      this.newBuilding = '';
    }
  }

  removeBuilding(index: number): void {
    this.buildings.splice(index, 1);
  }
}
