import { Component } from '@angular/core';
import {SoftwareListService} from "../../services/software-list.service";

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
  newSoftware: string = '';

  constructor(private softwareListService: SoftwareListService) {}

  addSoftware() {
    if (this.newSoftware.trim()) {
      this.softwareListService.addSoftware(this.newSoftware.trim());
      this.newSoftware = '';
    }
  }

  getSoftwareList(): string[] {
    return this.softwareListService.getSoftwareList();
  }

  removeItem(index: number) {
    this.softwareListService.removeSoftware(index);
  }
}
