import { Component } from '@angular/core';

@Component({
  selector: 'app-musicplay-list',
  templateUrl: './musicplay-list.component.html',
  styleUrl: './musicplay-list.component.css'
})
export class MusicplayListComponent {
  playlist: string[] = ['Stay', '14 Silent Sunctuary', 'Sining'];

  newSong: string = '';

  addSong() {
    if (this.newSong.trim()) {
      this.playlist.push(this.newSong.trim());
      this.newSong = '';
    } else {
      alert('Please enter a song name.');
    }
  }
  getSongs() {
    return this.playlist;
  }
  removeItem(index: number) {
    this.playlist.splice(index, 1);
  }
}
