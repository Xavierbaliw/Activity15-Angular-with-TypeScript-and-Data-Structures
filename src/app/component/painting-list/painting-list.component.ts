import { Component } from '@angular/core';
import {PaintingListService} from "../../services/painting-list.service";

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  newPaint: string = '';

  constructor(private paintListService: PaintingListService) {}

  addPaint() {
    if (this.newPaint.trim()) {
      this.paintListService.addPaint(this.newPaint.trim());
      this.newPaint = '';
    }
  }

  getPaints(): string[] {
    return this.paintListService.getPaints();
  }

  removeItem(index: number) {
    this.paintListService.removePaint(index);
  }
}
