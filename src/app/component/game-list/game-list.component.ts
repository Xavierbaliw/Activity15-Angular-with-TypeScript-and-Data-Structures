import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  games: string[] = [
    'Call of Duty Mobile',
    'Warzone PC',
    'Mobile Legend',
    'Clash of Clan',
    'Arena of Valor'
  ];

  newGame: string = '';

  addGame(): void {
    if (this.newGame.trim()) {
      this.games.push(this.newGame);
      this.newGame = '';
    } else {
      alert('Please enter a game title.');
    }
  }
}
