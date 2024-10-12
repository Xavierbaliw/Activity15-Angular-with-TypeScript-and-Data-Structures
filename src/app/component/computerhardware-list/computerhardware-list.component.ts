import { Component } from '@angular/core';
import {ComputerhardwareListService} from "../../services/computerhardware-list.service";

@Component({
  selector: 'app-computerhardware-list',
  templateUrl: './computerhardware-list.component.html',
  styleUrl: './computerhardware-list.component.css'
})
export class ComputerhardwareListComponent {
  newHardware: string = '';

  constructor(private hardwareListService: ComputerhardwareListService) {}

  addHardware() {
    if (this.newHardware.trim()) {
      this.hardwareListService.addHardware(this.newHardware.trim());
      this.newHardware = '';
    }
  }

  getHardwares(): string[] {
    return this.hardwareListService.getHardwares();
  }

  removeItem(index: number) {
    this.hardwareListService.removeHardware(index);
  }
}
