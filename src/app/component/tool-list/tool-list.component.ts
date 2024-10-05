import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  tools: string[] = ['Hammer', 'Screwdriver', 'Wrench'];
  newTool: string = '';

  addTool() {
    if (this.newTool) {
      this.tools.push(this.newTool);
      this.newTool = '';
    }
  }
  removeItem(index: number) {
    this.tools.splice(index, 1);
  }
}
