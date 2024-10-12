import { Component } from '@angular/core';
import {MovieListService} from "../../services/movie-list.service";

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  newMovie: { name: string; director: string } = { name: '', director: '' };

  constructor(private movieListService: MovieListService) {}

  addMovie() {
    if (this.newMovie.name.trim() && this.newMovie.director.trim()) {
      this.movieListService.addMovie(this.newMovie);
      this.newMovie = { name: '', director: '' };
    }
  }

  getMovies(): { name: string; director: string }[] {
    return this.movieListService.getMovies();
  }

  removeItem(index: number) {
    this.movieListService.removeMovie(index);
  }
}
