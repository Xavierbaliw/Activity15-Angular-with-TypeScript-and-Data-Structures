import { Component } from '@angular/core';
import {ExerciseListService} from "../../services/exercise-list.service";

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  newExercise: string = '';

  constructor(private exerciseListService: ExerciseListService) {}

  addExercise() {
    if (this.newExercise.trim()) {
      this.exerciseListService.addExercise(this.newExercise.trim());
      this.newExercise = '';
    }
  }

  getExercises(): string[] {
    return this.exerciseListService.getExercises();
  }

  removeItem(index: number) {
    this.exerciseListService.removeExercise(index);
  }
}
