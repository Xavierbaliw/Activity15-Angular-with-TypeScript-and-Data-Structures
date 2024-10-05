import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  // Define an array to hold upcoming TV events
  events: string[] = [
    'Fiesta',
    'Dance Contest',
    'Singing Contest',
  ];

  newEvent: string = '';


  addEvent(): void {
    if (this.newEvent) {
      this.events.push(this.newEvent);
      this.newEvent = '';
    }
  }

  removeEvent(event: string): void {
    this.events = this.events.filter(e => e !== event);
  }
}

