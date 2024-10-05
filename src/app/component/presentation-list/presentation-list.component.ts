import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
  presentationTopics: string[] = ["Angular RxJs", "Guide to Angular Directives", "Angular Services"];
  newTopic: string = '';

  addTopic() {
    if (this.newTopic.trim()) {
      this.presentationTopics.push(this.newTopic.trim());
      this.newTopic = '';
    }
  }

  removeTopic(index: number) {
    this.presentationTopics.splice(index, 1);
  }
}
