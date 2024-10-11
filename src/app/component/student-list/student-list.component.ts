import { Component } from '@angular/core';
import {StudentListService} from "../../services/student-list.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  name: string = '';
  course: string = '';
  section: string = '';

  constructor(private studentListService: StudentListService) {}

  get studentList(): string[] {
    return this.studentListService.getStudents();
  }

  addItem(): void {
    const studentInfo = `${this.name} - ${this.course} (${this.section})`;
    if (this.name && this.course && this.section) {
      this.studentListService.addStudent(studentInfo);
      this.clearInputs();
    } else {
      alert('Please fill in all fields.');
    }
  }

  removeItem(index: number): void {
    this.studentListService.removeStudent(index);
  }

  clearInputs(): void {
    this.name = '';
    this.course = '';
    this.section = '';
  }
}
