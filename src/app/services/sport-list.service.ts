import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportListService {
  private sports: string[] = ['Soccer', 'Basketball', 'Tennis', 'Baseball', 'Cricket'];

  addSport(sport: string) {
    this.sports.push(sport);
  }

  getSports(): string[] {
    return this.sports;
  }

  removeSport(index: number) {
    if (index > -1) {
      this.sports.splice(index, 1);
    }
  }
}
