import { Injectable } from '@angular/core';

export interface PresentationItem {
  topic: string;
  presenter: string;
}
@Injectable({
  providedIn: 'root'
})
export class PresentationListService {
  private presentationItems: PresentationItem[] = [];

  addPresentation(newPresentation: PresentationItem) {
    this.presentationItems.push(newPresentation);
  }

  removePresentation(index: number) {
    this.presentationItems.splice(index, 1);
  }

  getPresentations(): PresentationItem[] {
    return this.presentationItems;
  }
}
