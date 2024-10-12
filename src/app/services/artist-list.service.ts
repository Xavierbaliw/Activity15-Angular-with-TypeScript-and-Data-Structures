import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistListService {
  private artists: string[] = ['Miguel Tan Felix'];

  addArtist(artist: string) {
    this.artists.push(artist);
  }

  getArtists(): string[] {
    return this.artists;
  }

  removeArtist(index: number) {
    if (index > -1) {
      this.artists.splice(index, 1);
    }
  }
}
