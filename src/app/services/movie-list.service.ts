import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  private movies: { name: string; director: string }[] = [
    { name: 'Firefly', director: 'Zig Dulay' },
    { name: 'Rewind', director: 'Mae Cruz-Alviar' },
  ];

  addMovie(movie: { name: string; director: string }) {
    this.movies.push(movie);
  }

  getMovies(): { name: string; director: string }[] {
    return this.movies;
  }

  removeMovie(index: number) {
    if (index > -1) {
      this.movies.splice(index, 1);
    }
  }
}
