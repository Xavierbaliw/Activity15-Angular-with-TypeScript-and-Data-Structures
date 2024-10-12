import { Component } from '@angular/core';
import {LibraryToolListService} from "../../services/library-list.service";

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  newTool: string = '';

  constructor(private libraryToolListService: LibraryToolListService) {}

  addTool() {
    if (this.newTool.trim()) {
      this.libraryToolListService.addTool(this.newTool.trim());
      this.newTool = '';
    }
  }

  getTools(): string[] {
    return this.libraryToolListService.getTools();
  }

  removeItem(index: number) {
    this.libraryToolListService.removeTool(index);
  }
}
