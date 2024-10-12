import { Component } from '@angular/core';
import {DevelopertoolsListService} from "../../services/developertools-list.service";

@Component({
  selector: 'app-developertools-list',
  templateUrl: './developertools-list.component.html',
  styleUrl: './developertools-list.component.css'
})
export class DevelopertoolsListComponent {
  newTool: string = '';

  constructor(private developerToolsService: DevelopertoolsListService) {}

  addTool() {
    if (this.newTool.trim()) {
      this.developerToolsService.addTool(this.newTool.trim());
      this.newTool = '';
    }
  }

  getTools(): string[] {
    return this.developerToolsService.getTools();
  }

  removeItem(index: number) {
    this.developerToolsService.removeTool(index);
  }
}
