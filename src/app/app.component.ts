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

  constructor(gps: GamePlayService) {

    
  }
}
 