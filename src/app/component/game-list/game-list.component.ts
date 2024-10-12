import { Component } from '@angular/core';
import {GameListService} from "../../services/game-list.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  newGame: string = '';

  constructor(private gameListService: GameListService) {}

  addGame() {
    if (this.newGame.trim()) {
      this.gameListService.addGame(this.newGame.trim());
      this.newGame = '';
    }
  }

  getGames(): string[] {
    return this.gameListService.getGames();
  }

  removeItem(index: number) {
    this.gameListService.removeGame(index);
  }
}
