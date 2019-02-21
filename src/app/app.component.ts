import { GamePlayService } from './game-play.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GamePlayService]
})
export class AppComponent {
  title = 'Tic Tac Toe Game';

  constructor(private gps: GamePlayService) { 

  }

  playerClick(i) {
    if(this.gps.turn == 0) {
      this.gps.blocks[i].setValue("tick");
    }
    else {
      this.gps.blocks[i].setValue("cross");
    }
    this.changeTurn();
  }

  botTurn() {
    alert("Bot Turn"); 
  }

  changeTurn() {
    this.gps.changeTurn();
    if (this.gps.turn = 1) {
      this.botTurn();
    }
  }
}
 