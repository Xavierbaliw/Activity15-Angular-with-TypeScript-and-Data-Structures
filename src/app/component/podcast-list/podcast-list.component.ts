import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
  podcasts: string[] = [
    'Episode 1: Introduction to Angular',
    'Episode 2: Understanding Components',
    'Episode 3: Services and Dependency Injection'
  ];

  newPodcast: string = '';

  addPodcast() {
    if (this.newPodcast.trim()) {
      this.podcasts.push(this.newPodcast.trim());
      this.newPodcast = '';
    }
  }

  removePodcast(index: number) {
    this.podcasts.splice(index, 1);
  }
}
