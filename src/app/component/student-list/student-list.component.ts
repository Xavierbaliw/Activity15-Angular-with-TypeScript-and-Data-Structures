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
  studentList: string[] = [];

  addItem(): void {
    const studentInfo = `${this.name} - ${this.course} (${this.section})`;
    if (this.name && this.course && this.section) {
      this.studentList.push(studentInfo);
      this.clearInputs();
    } else {
      alert('Please fill in all fields.');
    }
  }


  removeItem(index: number): void {
    this.studentList.splice(index, 1);
  }

  clearInputs(): void {
    this.name = '';
    this.course = '';
    this.section = '';
  }
}
