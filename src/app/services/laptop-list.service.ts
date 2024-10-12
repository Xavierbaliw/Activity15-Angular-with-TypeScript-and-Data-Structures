import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptopListService {
  private laptops: string[] = ['Dell', 'Intel', 'Ryzen'];

  addLaptop(laptop: string) {
    this.laptops.push(laptop);
  }

  getLaptops(): string[] {
    return this.laptops;
  }

  removeLaptop(index: number) {
    if (index > -1) {
      this.laptops.splice(index, 1);
    }
  }
}
