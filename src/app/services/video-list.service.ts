import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoListService {
  private videos: string[] = ['Angular Basics', 'TypeScript for Beginners', 'Advanced Angular Techniques', 'Creating Angular Applications'];

  addVideo(video: string) {
    this.videos.push(video);
  }

  getVideos(): string[] {
    return this.videos;
  }

  removeVideo(index: number) {
    if (index > -1) {
      this.videos.splice(index, 1);
    }
  }
}
