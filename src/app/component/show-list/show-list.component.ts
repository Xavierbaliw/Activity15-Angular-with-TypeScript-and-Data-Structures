import { Component } from '@angular/core';
import {ShowListService} from "../../services/show-list.service";

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {
  newShow: string = '';

  constructor(private showListService: ShowListService) {}

  addShow() {
    if (this.newShow.trim()) {
      this.showListService.addShow(this.newShow.trim());
      this.newShow = '';
    }
  }

  getShows(): string[] {
    return this.showListService.getShows();
  }

  removeItem(index: number) {
    this.showListService.removeShow(index);
  }
}
