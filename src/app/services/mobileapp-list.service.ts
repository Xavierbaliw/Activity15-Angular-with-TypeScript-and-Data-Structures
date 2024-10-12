import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileappListService {
  private apps: string[] = ['Facebook', 'Instagram', 'Whatsapp', 'Telegram'];

  addApp(app: string) {
    this.apps.push(app);
  }

  getApps(): string[] {
    return this.apps;
  }

  removeApp(index: number) {
    if (index > -1) {
      this.apps.splice(index, 1);
    }
  }
}
