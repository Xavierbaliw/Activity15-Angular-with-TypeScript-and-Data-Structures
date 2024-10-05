import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  tools: string[] = ['Hammer', 'Screwdriver', 'Wrench']; // Sample list of tools
  newTool: string = ''; // To capture the new tool input

  // Method to add a new tool to the list
  addTool() {
    if (this.newTool) {
      this.tools.push(this.newTool);
      this.newTool = ''; // Clear the input field
    }
  }
}
