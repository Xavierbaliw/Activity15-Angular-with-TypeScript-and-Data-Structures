import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
  frameworks: string[] = ['Angular'];
  newFramework: string = '';

  addFramework() {
    if (this.newFramework) {
      this.frameworks.push(this.newFramework);
      this.newFramework = '';
    }
  }

  removeFramework(index: number) {
    this.frameworks.splice(index, 1);
  }
}
