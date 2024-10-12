import { Component } from '@angular/core';
import {PodcastListService} from "../../services/podcast-list.service";

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
  newPodcast: string = '';

  constructor(private podcastListService: PodcastListService) {}

  addPodcast() {
    if (this.newPodcast.trim()) {
      this.podcastListService.addPodcast(this.newPodcast.trim());
      this.newPodcast = '';
    }
  }

  getPodcasts(): string[] {
    return this.podcastListService.getPodcasts();
  }

  removeItem(index: number) {
    this.podcastListService.removePodcast(index);
  }
}
