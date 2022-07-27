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

  constructor(game: Gamelogic) { }

  ngOnInit(): void {
  }

}
