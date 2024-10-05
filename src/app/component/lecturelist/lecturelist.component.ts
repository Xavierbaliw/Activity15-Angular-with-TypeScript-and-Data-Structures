import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectures: string[] = ['Introduction to Angular', 'Understanding TypeScript', 'Advanced Angular Concepts'];

  newLecture: string = '';

  addLecture() {
    if (this.newLecture) {
      this.lectures.push(this.newLecture);
      this.newLecture = '';
    }
  }

  removeLecture(index: number) {
    this.lectures.splice(index, 1);
  }
}
