import { Component } from '@angular/core';
import {SubjectListService} from "../../services/subject-list.service";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  newSubject: string = '';

  constructor(private subjectListService: SubjectListService) {}

  addSubject() {
    if (this.newSubject.trim()) {
      this.subjectListService.addSubject(this.newSubject.trim());
      this.newSubject = '';
    }
  }

  getSubjects(): string[] {
    return this.subjectListService.getSubjects();
  }

  removeItem(index: number) {
    this.subjectListService.removeSubject(index);
  }
}
