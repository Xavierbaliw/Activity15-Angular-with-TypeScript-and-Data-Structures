import { Component } from '@angular/core';
import {FrameworkListService} from "../../services/framework-list.service";

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
  newTool: string = '';

  constructor(private frameworkToolsListService: FrameworkListService) {}

  addTool() {
    if (this.newTool.trim()) {
      this.frameworkToolsListService.addTool(this.newTool.trim());
      this.newTool = '';
    }
  }

  getTools(): string[] {
    return this.frameworkToolsListService.getTools();
  }

  removeItem(index: number) {
    this.frameworkToolsListService.removeTool(index);
  }
}
