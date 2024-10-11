import { Component } from '@angular/core';
import {CourseListService} from "../../services/course-list.service";

@Component({
  selector: 'app-course-list',

  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courseName: string = '';

  constructor(private courseListService: CourseListService) { }

  get courseList() {
    return this.courseListService.getCourses();
  }

  addCourse() {
    this.courseListService.addCourse(this.courseName);
    this.courseName = '';
  }

  removeCourse(index: number) {
    this.courseListService.removeCourse(index);
  }
}
