import { Component } from '@angular/core';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {

  softwareList: string[] = ['Visual Studio Code', 'Node.js', 'Webstorm'];

  newSoftware: string = '';


  addSoftware() {
    if (this.newSoftware.trim()) {
      this.softwareList.push(this.newSoftware);
      this.newSoftware = '';
    }
  }
  removeItem(index: number) {
    this.softwareList.splice(index, 1);
  }
}
