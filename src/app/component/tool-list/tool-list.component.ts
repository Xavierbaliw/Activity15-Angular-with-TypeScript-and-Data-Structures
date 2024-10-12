import { Component } from '@angular/core';
import {ToolListService} from "../../services/tool-list.service";

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  newTool: string = '';

  constructor(private toolListService: ToolListService) {}

  addTool() {
    if (this.newTool.trim()) {
      this.toolListService.addTool(this.newTool.trim());
      this.newTool = '';
    }
  }

  getTools(): string[] {
    return this.toolListService.getTools();
  }

  removeItem(index: number) {
    this.toolListService.removeTool(index);
  }
}
