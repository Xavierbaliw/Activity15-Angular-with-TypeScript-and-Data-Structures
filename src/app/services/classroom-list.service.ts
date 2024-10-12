import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassroomListService {
  private classrooms: string[] = ['Avelino,Xavier Zues Osias, E.', 'Alviar, Renzlyn, A.'];

  addClassroom(classroom: string) {
    this.classrooms.push(classroom);
  }

  getClassrooms(): string[] {
    return this.classrooms;
  }

  removeClassroom(index: number) {
    if (index > -1) {
      this.classrooms.splice(index, 1);
    }
  }
}
