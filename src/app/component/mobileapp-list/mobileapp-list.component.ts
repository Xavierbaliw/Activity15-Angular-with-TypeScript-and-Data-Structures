import { Component } from '@angular/core';
import {MobileappListService} from "../../services/mobileapp-list.service";

@Component({
  selector: 'app-mobileapp-list',
  templateUrl: './mobileapp-list.component.html',
  styleUrl: './mobileapp-list.component.css'
})
export class MobileappListComponent {
  newApp: string = '';

  constructor(private mobileAppListService: MobileappListService) {}

  addApp() {
    if (this.newApp.trim()) {
      this.mobileAppListService.addApp(this.newApp.trim());
      this.newApp = '';
    }
  }

  getApps(): string[] {
    return this.mobileAppListService.getApps();
  }

  removeItem(index: number) {
    this.mobileAppListService.removeApp(index);
  }
}
