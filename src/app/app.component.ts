import { GamePlayService } from './game-play.service';
import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GamePlayService]
})
export class AppComponent {
  title = 'Tic Tac Toe Game';
  lock = false;

  constructor(private gps: GamePlayService, public snackBar: MatSnackBar) { 

  }
	newGame() {
		this.gps.freeRemainingBlocks = 9;
  		this.gps.initBlocks();
    	this.gps.initPlayers();
		this.lock = false;
		this.gps.turn = 0;
	}

	resetGame(event) {
		location.reload();
		event.preventDefault();
}


	playerClick(i) {
		if( this.gps.blocks[i].free == false || this.lock == true ) { 
			return;
		}

		this.gps.freeRemainingBlocks -= 1; 

		if( this.gps.freeRemainingBlocks <= 0 ) {
			this.lock = true;
			this.snackBar.open("Game:", "Draw", {
		      duration: 4000,
		    });
			this.newGame();
			return;
		}


		if( this.gps.turn == 0 ) { 
			this.gps.blocks[i].setValue("tick");
			
		} else { 
			this.gps.blocks[i].setValue("cross");	
			}

		var complete = this.gps.blockSetComplete();

		if( complete == false ) {
			this.changeTurn();	
			return;
			
		} else {
			this.lock = true;
			if (this.gps.turn == 0){
			var winner = "You! Congrats"	
			}
			else {
				var winner = "Computer." 
			}
			this.snackBar.open("Winner is ",": "+ winner, {
		      duration: 4000,
		    });

		    this.newGame();
		    return;
		}
		
}

	botTurn() {

		if( this.gps.freeRemainingBlocks <= 0 ) {
			return;
		}

		var bot_selected = this.gps.figureBotMove()-1;
		
		if( this.gps.blocks[bot_selected].free == true ) {
			this.playerClick(bot_selected);	
		} else {
			this.botTurn();
			return;
		}

}

	changeTurn() {
		var player = this.gps.changeTurn();

		if( player == 1 ) {  
			this.botTurn();
			return;
		
		}
}
}
 