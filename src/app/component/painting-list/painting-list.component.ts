import { Component } from '@angular/core';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  paintingList: string[] = [
    'Mona Lisa',
  ];

  newPainting: string = '';
  addPainting() {
    if (this.newPainting) {
      this.paintingList.push(this.newPainting);
      this.newPainting = ''; // Clear input after adding
    }
  }

  removePainting(painting: string) {
    this.paintingList = this.paintingList.filter(item => item !== painting);
  }
}
