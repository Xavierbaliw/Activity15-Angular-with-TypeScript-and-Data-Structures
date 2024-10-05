import { Component } from '@angular/core';

@Component({
  selector: 'app-developertools-list',
  templateUrl: './developertools-list.component.html',
  styleUrl: './developertools-list.component.css'
})
export class DevelopertoolsListComponent {
  developerTools: string[] = [
    'Visual Studio Code',
    'Git',
  ];

  newTool: string = '';

  addTool(): void {
    if (this.newTool.trim()) {
      this.developerTools.push(this.newTool);
      this.newTool = '';
    } else {
      alert("Please enter a tool name.");
    }
  }

  removeTool(index: number): void {
    this.developerTools.splice(index, 1);
  }
}
