import { Status } from './gamestatus';
export class Gamelogic {

  public constructor(){
    this.gameStatus = Status.STOP
    this.gameField = [0,0,0,0,0,0,0,0,0];
  }
  // gameStatus : Status;
  gameStatus: Status;
  gameField: Array<number> = []
  currentPlayer: number = 1;


  gameStart(): void{
    this.gameField = [0,0,0,0,0,0,0,0,0];
    this.currentPlayer = this.randomPlayer()
    console.log(this.currentPlayer)
    this.gameStatus = Status.START
  }

  randomPlayer(): number {
    const startPlayer = Math.floor(Math.random() *2)+1;
    return startPlayer
  }

}
