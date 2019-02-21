import { Player } from './player';
import { Block } from './block';
import { Injectable } from '@angular/core';

@Injectable()
export class GamePlayService {
  players = []
  turn: number = 0;
  draw: number = 0;

  blocks = []
  freeRemainingBlocks = 9;

  constructor() {
    this.initBlocks();
    this.initPlayers();
   }
  
  initBlocks() {
    this.blocks = []
    for (var i=1; i<=9; i++) {
       var block = new Block(); 
       block.free = true;
       block.value = "";
       block.symbol = "";
       
       this.blocks.push(block); 
    }
  }

  initPlayers() {
    this.players = [];
    var player1 = new Player();
    player1.bot = false;

    var player2 = new Player();
    this.players.push(player1);
    this.players.push(player2);
  }

  changeTurn() {
    if (this.turn == 0){
      this.turn = 1;
    }
    else {
      this.turn = 0
    }
  }
  

}
