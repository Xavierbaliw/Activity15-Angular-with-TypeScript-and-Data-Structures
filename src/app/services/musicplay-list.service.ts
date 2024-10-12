import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicplayListService {
  private musicPlaylist: string[] = ['Stay', 'Silent Sanctuary', 'Sining'];

  addMusic(music: string) {
    this.musicPlaylist.push(music);
  }

  getMusicPlaylist(): string[] {
    return this.musicPlaylist;
  }

  removeMusic(index: number) {
    if (index > -1) {
      this.musicPlaylist.splice(index, 1);
    }
  }
}
