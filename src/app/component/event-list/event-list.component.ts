import { Component } from '@angular/core';
import {EventListService} from "../../services/event-list.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  newEvent: string = '';

  constructor(private eventListService: EventListService) {}

  addEvent() {
    if (this.newEvent.trim()) {
      this.eventListService.addEvent(this.newEvent.trim());
      this.newEvent = '';
    }
  }

  getEvents(): string[] {
    return this.eventListService.getEvents();
  }

  removeItem(index: number) {
    this.eventListService.removeEvent(index);
  }
}
