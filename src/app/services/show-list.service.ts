import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowListService {
  private shows: string[] = ['Channel 2: SHOWTIME', 'Channel 7:EAT BULAGA']; // Example shows

  addShow(show: string) {
    this.shows.push(show);
  }

  getShows(): string[] {
    return this.shows;
  }

  removeShow(index: number) {
    if (index > -1) {
      this.shows.splice(index, 1);
    }
  }
}
