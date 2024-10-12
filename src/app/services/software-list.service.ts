import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoftwareListService {
  private softwareList: string[] = ['Visual Studio Code', 'Node.js', 'Webstorm'];

  addSoftware(software: string) {
    this.softwareList.push(software);
  }

  getSoftwareList(): string[] {
    return this.softwareList;
  }

  removeSoftware(index: number) {
    if (index > -1) {
      this.softwareList.splice(index, 1);
    }
  }
}
