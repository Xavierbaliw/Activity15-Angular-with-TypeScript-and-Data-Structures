import { Component } from '@angular/core';
import {LecturelistService} from "../../services/lecturelist.service";

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  newLecture: string = '';

  constructor(private lectureListService: LecturelistService) {}

  addLecture() {
    if (this.newLecture.trim()) {
      this.lectureListService.addLecture(this.newLecture.trim());
      this.newLecture = '';
    }
  }

  getLectures(): string[] {
    return this.lectureListService.getLectures();
  }

  removeItem(index: number) {
    this.lectureListService.removeLecture(index);
  }
}
