import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
  artists: string[] = ['Miguel Tan Felix'];
  newArtist: string = '';

  addArtist() {
    if (this.newArtist) {
      this.artists.push(this.newArtist);
      this.newArtist = '';
    }
  }

  removeArtist(index: number) {
    this.artists.splice(index, 1);
  }
}
