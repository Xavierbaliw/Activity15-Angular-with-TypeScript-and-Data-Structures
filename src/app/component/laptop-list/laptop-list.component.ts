import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
  laptops: string[] = ['Dell', 'Intel', 'Ryzen'];
  newLaptop: string = '';

  addLaptop() {
    if (this.newLaptop) {
      this.laptops.push(this.newLaptop);
      this.newLaptop = '';
    }
  }

  removeLaptop(index: number) {
    this.laptops.splice(index, 1);
  }
}
