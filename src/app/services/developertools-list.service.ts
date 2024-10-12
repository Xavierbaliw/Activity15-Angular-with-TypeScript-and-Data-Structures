import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevelopertoolsListService {
  private tools: string[] = ['Visual Studio Code', 'GIT'];

  addTool(tool: string) {
    this.tools.push(tool);
  }

  getTools(): string[] {
    return this.tools;
  }

  removeTool(index: number) {
    if (index > -1) {
      this.tools.splice(index, 1);
    }
  }
}
