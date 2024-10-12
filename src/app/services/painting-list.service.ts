import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaintingListService {
  private paints: string[] = ['Mona Lisa'];

  addPaint(paint: string) {
    this.paints.push(paint);
  }

  getPaints(): string[] {
    return this.paints;
  }

  removePaint(index: number) {
    if (index > -1) {
      this.paints.splice(index, 1);
    }
  }
}
