import { Component } from '@angular/core';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  composers: string[] = ['Daryl Ong'];
  newComposer: string = '';

  addComposer(): void {
    if (this.newComposer) {
      this.composers.push(this.newComposer);
      this.newComposer = ''; // Clear the input
    }
  }

  removeComposer(index: number): void {
    this.composers.splice(index, 1);
  }
}
