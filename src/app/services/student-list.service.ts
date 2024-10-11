import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
  private studentList: string[] = [];

  getStudents(): string[] {
    return this.studentList;
  }

  addStudent(studentInfo: string): void {
    this.studentList.push(studentInfo);
  }

  removeStudent(index: number): void {
    this.studentList.splice(index, 1);
  }
}
