import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subjects: string[] = ['SIA2', 'SA101', 'GE10'];
  newSubject: string = '';


  addSubject(): void {
    if (this.newSubject.trim()) {
      this.subjects.push(this.newSubject.trim());
      this.newSubject = '';
    }
  }

  removeItem(index: number) {
    this.subjects.splice(index, 1);
  }
}
