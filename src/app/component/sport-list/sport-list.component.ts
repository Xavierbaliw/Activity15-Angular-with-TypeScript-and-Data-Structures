import { Component } from '@angular/core';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrl: './sport-list.component.css'
})
export class SportListComponent {

  sports: string[] = ['Soccer', 'Basketball', 'Tennis', 'Baseball', 'Cricket'];
  newSport: string = '';


  addSport(): void {
    if (this.newSport.trim()) {
      this.sports.push(this.newSport.trim());
      this.newSport = '';
    }
  }


  getSports(): string[] {
    return this.sports;
  }
  removeItem(index: number) {
    this.sports.splice(index, 1);
  }
}
