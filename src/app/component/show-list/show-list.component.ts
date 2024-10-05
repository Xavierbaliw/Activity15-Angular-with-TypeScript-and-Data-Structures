import { Component } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {
  tvShows: string[] = [
    'Channel 2',
    'Channel 5',
    'Channel 7',
    'Channel 11',
    'Channel 23'
  ];

  newShow: string = '';

  addShow() {
    if (this.newShow.trim() !== '') {
      this.tvShows.push(this.newShow.trim());
      this.newShow = '';
    } else {
      alert('Please enter a valid show name.');
    }
  }

  removeShow(index: number) {
    this.tvShows.splice(index, 1);
  }
}
