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

  gameEnd(): void{
    this.gameStatus = Status.STOP
  }

  async checkGameFull(): Promise<boolean> {
    let isFull = true;

    if (this.gameField.includes(0)){
      isFull = false;
    }

    if (isFull){
      this.gameEnd()
      return true
    }else{
      return false
    }
  }



  arrayEquals(a: Array<any>, b: Array<any>): boolean{
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every(( value, index ) => value === b[index])
  }

  async checkGameWinner(): Promise<boolean> {
    let isWinner = false;

    const checkArray = (this.currentPlayer === 1) ? this.winSituationOne : this.winSituationTwo;

    let currentArray: Array<number> = []

    this.gameField.forEach((subfield, index) => {
      if (subfield !== this.currentPlayer){
        currentArray[index] = 0
      }else{
        currentArray[index] = subfield
      }
    })

    checkArray.forEach((checkfield, checkindex) => {
      if(this.arrayEquals(checkfield, currentArray)) {
        isWinner = true
      }
    })

    // console.log(currentArray)
    console.log(currentArray)

    if (isWinner){
      this.gameEnd()
      return true
    }else {
      return false
    }
  }

}
