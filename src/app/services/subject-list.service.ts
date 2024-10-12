import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectListService {
  private subjects: string[] = ['System Administration and Maintenance', 'SYSTEM INTEGRATION AND ARCHITECTURE 2'];

  addSubject(subject: string) {
    this.subjects.push(subject);
  }

  getSubjects(): string[] {
    return this.subjects;
  }

  removeSubject(index: number) {
    if (index > -1) {
      this.subjects.splice(index, 1);
    }
  }
}
