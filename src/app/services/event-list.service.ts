import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventListService {
  private events: string[] = ['Fiesta', 'Dance Contest', 'Singing Contest'];

  addEvent(event: string) {
    this.events.push(event);
  }

  getEvents(): string[] {
    return this.events;
  }

  removeEvent(index: number) {
    if (index > -1) {
      this.events.splice(index, 1);
    }
  }
}
