import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  name: string = '';
  course: string = '';
  section: string = '';
  studentList: string[] = [

  ];

  addItem() {
    if (this.name.trim() && this.course.trim() && this.section.trim()) {
      const studentInfo = `Name: ${this.name.trim()} , Course: ${this.course.trim()}, Section: ${this.section.trim()}`;
      this.studentList.push(studentInfo);

      this.name = '';
      this.course = '';
      this.section = '';
    }
    else {
      console.log('Please fill out all fields.');
    }
  }
}
