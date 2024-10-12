import { Component } from '@angular/core';
import {MusicplayListService} from "../../services/musicplay-list.service";

@Component({
  selector: 'app-musicplay-list',
  templateUrl: './musicplay-list.component.html',
  styleUrl: './musicplay-list.component.css'
})
export class MusicplayListComponent {
  newMusic: string = '';

  constructor(private musicPlayListService: MusicplayListService) {}

  addMusic() {
    if (this.newMusic.trim()) {
      this.musicPlayListService.addMusic(this.newMusic.trim());
      this.newMusic = '';
    }
  }

  getMusicPlaylist(): string[] {
    return this.musicPlayListService.getMusicPlaylist();
  }

  removeItem(index: number) {
    this.musicPlayListService.removeMusic(index);
  }
}
