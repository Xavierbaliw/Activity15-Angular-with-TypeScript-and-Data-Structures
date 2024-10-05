import { Component } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {

  movies: string[] = [];

  newMovie: string = '';


  addMovie() {
    if(this.newMovie.trim() !== '') {
      this.movies.push(this.newMovie.trim());
      this.newMovie = '';
    }
  }

  getMovies(): string[] {
    return this.movies;
  }
  removeItem(index: number) {
    this.movies.splice(index, 1);
  }
}
