import { Component } from '@angular/core';
import {SportListService} from "../../services/sport-list.service";

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrl: './sport-list.component.css'
})
export class SportListComponent {
  newSport: string = '';

  constructor(private sportListService: SportListService) {}

  addSport() {
    if (this.newSport.trim()) {
      this.sportListService.addSport(this.newSport.trim());
      this.newSport = '';
    }
  }

  getSports(): string[] {
    return this.sportListService.getSports();
  }

  removeItem(index: number) {
    this.sportListService.removeSport(index);
  }
}
