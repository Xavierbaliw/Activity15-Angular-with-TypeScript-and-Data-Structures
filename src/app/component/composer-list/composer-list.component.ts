import { Component } from '@angular/core';
import {ComposerListService} from "../../services/composer-list.service";

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  newComposer: string = '';
  editIndex: number | null = null;

  constructor(private composerListService: ComposerListService) {}

  addComposer() {
    if (this.editIndex !== null) {
      this.composerListService.updateComposer(this.editIndex, this.newComposer.trim());
      this.editIndex = null;
    } else {
      if (this.newComposer.trim()) {
        this.composerListService.addComposer(this.newComposer.trim());
      }
    }
    this.newComposer = '';
  }

  getComposers(): string[] {
    return this.composerListService.getComposers();
  }

  removeItem(index: number) {
    this.composerListService.removeComposer(index);
  }

  editComposer(index: number) {
    this.newComposer = this.composerListService.getComposers()[index];
    this.editIndex = index;
  }
}
