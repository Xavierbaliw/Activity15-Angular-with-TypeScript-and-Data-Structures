import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComposerListService {
  private composers: string[] = ['Daryl Ong'];

  addComposer(composer: string) {
    this.composers.push(composer);
  }

  getComposers(): string[] {
    return this.composers;
  }

  removeComposer(index: number) {
    if (index > -1) {
      this.composers.splice(index, 1);
    }
  }

  updateComposer(index: number, composer: string) {
    if (index > -1) {
      this.composers[index] = composer;
    }
  }
}
