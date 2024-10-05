import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
  // Sample list of videos
  videos: string[] = [
    'Angular Basics',
    'TypeScript for Beginners',
    'Advanced Angular Techniques',
    'Creating Angular Applications'
  ];
  newVideo: string = '';

  addVideo() {
    if (this.newVideo.trim()) {
      this.videos.push(this.newVideo);
      this.newVideo = '';
    } else {
      alert('Please enter a valid video title.');
    }
  }

  removeVideo(index: number) {
    this.videos.splice(index, 1);
  }
}
