import { Component } from '@angular/core';
import {VideoListService} from "../../services/video-list.service";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
  newVideo: string = '';

  constructor(private videoListService: VideoListService) {}

  addVideo() {
    if (this.newVideo.trim()) {
      this.videoListService.addVideo(this.newVideo.trim());
      this.newVideo = '';
    }
  }

  getVideos(): string[] {
    return this.videoListService.getVideos();
  }

  removeItem(index: number) {
    this.videoListService.removeVideo(index);
  }
}
