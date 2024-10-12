import { Component } from '@angular/core';
import {PresentationListService} from "../../services/presentation-list.service";

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
  newPresentation: { topic: string; presenter: string } = { topic: '', presenter: '' };

  constructor(private presentationService: PresentationListService) {}

  addPresentation() {
    if (this.newPresentation.topic.trim() && this.newPresentation.presenter.trim()) {
      this.presentationService.addPresentation(this.newPresentation);
      this.newPresentation = { topic: '', presenter: '' };
    }
  }

  getPresentations(): { topic: string; presenter: string }[] {
    return this.presentationService.getPresentations();
  }

  removeItem(index: number) {
    this.presentationService.removePresentation(index);
  }
}
