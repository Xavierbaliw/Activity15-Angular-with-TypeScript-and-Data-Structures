import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  private games: string[] = ['Call of Duty', 'Mobile Warzone', 'PC', 'Mobile Legend', 'Clash of Clan', 'Arena of Valor'];

  addGame(game: string) {
    this.games.push(game);
  }

  getGames(): string[] {
    return this.games;
  }

  removeGame(index: number) {
    if (index > -1) {
      this.games.splice(index, 1);
    }
  }
}
