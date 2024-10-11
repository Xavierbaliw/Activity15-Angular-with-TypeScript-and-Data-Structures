import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  private courseList: { name: string }[] = [
    { name: 'BSIT' },
  ];

  getCourses() {
    return [...this.courseList]; // Return a copy of the course list
  }

  addCourse(courseName: string) {
    if (courseName.trim()) {
      const newCourse = { name: courseName.trim() };
      this.courseList.push(newCourse);
    } else {
      console.log('Please fill out all fields.');
    }
  }

  removeCourse(index: number) {
    if (index >= 0 && index < this.courseList.length) {
      this.courseList.splice(index, 1);
    }
  }
}
