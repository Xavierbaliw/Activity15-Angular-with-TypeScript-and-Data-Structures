import { Component } from '@angular/core';

@Component({
  selector: 'app-mobileapp-list',
  templateUrl: './mobileapp-list.component.html',
  styleUrl: './mobileapp-list.component.css'
})
export class MobileappListComponent {
  apps: string[] = ['Facebook','Instagram','Whatsapp','Telegram'];
  newApp: string = '';


  addApp(): void {
    if (this.newApp.trim() !== '') {
      this.apps.push(this.newApp.trim());
      this.newApp = '';
    }
  }


  removeApp(index: number): void {
    this.apps.splice(index, 1);
  }
}
