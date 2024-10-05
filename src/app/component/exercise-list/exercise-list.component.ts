import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  exercises: string[] = ['Push-ups', 'Squats', 'Lunges'];
  exerciseName: string = '';

  addExercise() {
    if (this.exerciseName.trim()) {
      this.exercises.push(this.exerciseName.trim());
      this.exerciseName = '';
    }
  }

  removeExercise(index: number) {
    this.exercises.splice(index, 1);
  }
}
