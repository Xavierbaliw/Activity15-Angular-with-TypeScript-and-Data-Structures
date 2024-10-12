import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LecturelistService {
  private lectures: string[] = [
    'Introduction to Angular',
    'Understanding TypeScript',
    'Advanced Angular Concepts',
  ];

  addLecture(lecture: string) {
    this.lectures.push(lecture);
  }

  getLectures(): string[] {
    return this.lectures;
  }

  removeLecture(index: number) {
    if (index > -1) {
      this.lectures.splice(index, 1);
    }
  }
}
