import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
  students: string[] = [
    'Avelino, Xavier Zues Osias E.',
    'Alviar, Renzlyn A.',
  ];

  newStudent: string = '';

  addStudent() {
    if (this.newStudent.trim()) {
      this.students.push(this.newStudent.trim());
      this.newStudent = '';

    }
  }
  removeStudent(index: number) {
    this.students.splice(index, 1);
  }
}
