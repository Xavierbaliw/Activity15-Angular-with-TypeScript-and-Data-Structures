import { Component } from '@angular/core';

@Component({
  selector: 'app-computerhardware-list',
  templateUrl: './computerhardware-list.component.html',
  styleUrl: './computerhardware-list.component.css'
})
export class ComputerhardwareListComponent {
  hardwareComponents: string[] = ['CPU', 'GPU', 'RAM', 'Motherboard'];
  newComponent: string = '';

  addComponent(): void {
    if (this.newComponent) {
      this.hardwareComponents.push(this.newComponent);
      this.newComponent = '';
    }
  }

  removeComponent(index: number): void {
    this.hardwareComponents.splice(index, 1);
  }
}
