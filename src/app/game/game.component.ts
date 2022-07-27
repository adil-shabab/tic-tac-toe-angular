import { Gamelogic } from './../gamelogic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [
    Gamelogic
  ]
})
export class GameComponent implements OnInit {

  constructor(public game: Gamelogic) { }

  ngOnInit(): void {
  }

  startGame(): void{
    this.game.gameStart()
  }

  async clickSubfield( subfield:any ): Promise<void>{
    if(this.game.gameStatus === 1){
      const position = subfield.currentTarget.getAttribute('position')
      
      console.log(position)

    }
  }
}
