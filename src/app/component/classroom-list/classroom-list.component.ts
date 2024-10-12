import { Component } from '@angular/core';
import {ClassroomListService} from "../../services/classroom-list.service";

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
  newClassroom: string = '';

  constructor(private classroomListService: ClassroomListService) {}

  addClassroom() {
    if (this.newClassroom.trim()) {
      this.classroomListService.addClassroom(this.newClassroom.trim());
      this.newClassroom = '';
    }
  }

  getClassrooms(): string[] {
    return this.classroomListService.getClassrooms();
  }

  removeItem(index: number) {
    this.classroomListService.removeClassroom(index);
  }
}
