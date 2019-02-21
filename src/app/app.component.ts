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

    var complete = this.gps.blockSetComplete();
    if(complete == true){
      
    }
    this.changeTurn();  
  }

  botTurn() {
    if(this.gps.freeRemainingBlocks <= 0) {
      return;
    }
    var bot_selected = this.gps.figureBotMove()-1;
    if (this.gps.blocks[bot_selected].free == true) {
      this.playerClick(bot_selected);
    }
    else {
      this.botTurn();
      return;
    }
  }

  changeTurn() {
    this.gps.changeTurn();
    if (this.gps.turn = 1) {
      this.botTurn();
    }
  }
}
 