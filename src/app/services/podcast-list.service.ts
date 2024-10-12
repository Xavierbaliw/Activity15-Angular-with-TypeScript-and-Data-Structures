import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastListService {
  private podcasts: string[] = [
    'Episode 1: Introduction to Angular',
    'Episode 2: Understanding Components',
    'Episode 3: Services and Dependency Injection'
  ];

  addPodcast(podcast: string) {
    this.podcasts.push(podcast);
  }

  getPodcasts(): string[] {
    return this.podcasts;
  }

  removePodcast(index: number) {
    if (index > -1) {
      this.podcasts.splice(index, 1);
    }
  }
}
