import { Status } from './gamestatus';
export class Gamelogic {


  winSituationOne : Array<Array<number>> = [
    [1,1,1,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,1,1,1],
    [1,0,0,1,0,0,1,0,0],
    [0,1,0,0,1,0,0,1,0],
    [0,0,1,0,0,1,0,0,1],
    [0,0,1,0,1,0,1,0,0],
    [1,0,0,0,1,0,0,0,1],
  ]
  winSituationTwo : Array<Array<number>> = [
    [2,2,2,0,0,0,0,0,0],
    [0,0,0,2,2,2,0,0,0],
    [0,0,0,0,0,0,2,2,2],
    [2,0,0,2,0,0,2,0,0],
    [0,2,0,0,2,0,0,2,0],
    [0,0,2,0,0,2,0,0,2],
    [0,0,2,0,2,0,2,0,0],
    [2,0,0,0,2,0,0,0,2],
  ]

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

  setField(position: number, value: number): void{
    this.gameField[position] = value
    console.log(this.gameField)
  }

  getPlayerColor(): string{
    const colorClass = (this.currentPlayer === 2) ? 'player-two' : 'player-one'
    return colorClass
  }

  changePlayer() :void{
    this.currentPlayer= (this.currentPlayer === 2) ? 1 : 2
  }

}
