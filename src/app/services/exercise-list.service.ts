import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseListService {
  private exercises: string[] = ['Push-ups', 'Squats', 'Lunges'];

  addExercise(exercise: string) {
    this.exercises.push(exercise);
  }

  getExercises(): string[] {
    return this.exercises;
  }

  removeExercise(index: number) {
    if (index > -1) {
      this.exercises.splice(index, 1);
    }
  }
}
