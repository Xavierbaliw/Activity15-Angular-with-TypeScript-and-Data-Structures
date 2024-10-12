import { Component } from '@angular/core';
import {ArtistListService} from "../../services/artist-list.service";

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
  newArtist: string = '';

  constructor(private artistListService: ArtistListService) {}

  addArtist() {
    if (this.newArtist.trim()) {
      this.artistListService.addArtist(this.newArtist.trim());
      this.newArtist = '';
    }
  }

  getArtists(): string[] {
    return this.artistListService.getArtists();
  }

  removeItem(index: number) {
    this.artistListService.removeArtist(index);
  }
}
