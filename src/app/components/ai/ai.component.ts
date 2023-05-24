import { Component, OnInit } from '@angular/core';
import { GameBoardService } from '../../services/gameBoard.service';

@Component({
  selector: 'ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss']
})
export class ai {
  text = "Hello World";
  gameBoardArray: string[][] = [[]];
  gameBoardService: GameBoardService;

  constructor() {
    console.log("ai.component.ts - constructor");

    this.gameBoardService = new GameBoardService();
    this.gameBoardArray = this.gameBoardService.getGameBoardArray();
  }

  countMove() {
    console.log("ai.component.ts - countMove");


    let x5 = []
    let x4 = []
    let x3 = []
    let x2 = []
    let x1 = []

    let o5 = []
    let o4 = []
    let o3 = []
    let o2 = []
    let o1 = []

    // let closestToMiddleX = 0
    // let closestToMiddleY = 0


    //z lewej gory w prawy dol
    {
      console.log("<b class='ktory'>1.</b><br>")
      for (let minus = 0; minus < this.gameBoardArray.length; minus++) {
        console.log(minus.toString(), "|  ");
        for (let i = 0; i < this.gameBoardArray.length; i++) {
          for (let j = 0; j < this.gameBoardArray.length; j++) {
            if (i - minus == j) {
              // console.log("a1");
              console.log(this.gameBoardArray[i][j])
            }
          }
        }
        console.log("<br>")
      }

      console.log("<b class='ktory'>2.</b><br>")
      for (let plus = 1; plus < this.gameBoardArray.length; plus++) {
        console.log(plus.toString(), "|  ");
        for (let i = 0; i < this.gameBoardArray.length; i++) {
          for (let j = 0; j < this.gameBoardArray.length; j++) {
            if (i + plus == j) {
              // console.log("a2");
              console.log(this.gameBoardArray[i][j])
            }
          }
        }
        console.log("<br>")
      }
    }

    console.log("<hr>")

    //z prawej gory w dol lewo
    {
      console.log("<b class='ktory'>3.</b><br>")
      for (let minus = 1; minus <= this.gameBoardArray.length; minus++) {
        console.log(minus.toString(), "*|  ");
        for (let i = this.gameBoardArray.length - 1; i >= 0; i--) {
          for (let j = this.gameBoardArray.length - 1; j >= 0; j--) {
            if (i + j == this.gameBoardArray.length - minus) {
              // console.log("b1");
              console.log(this.gameBoardArray[j][i])
            }
          }
        }
        console.log("<br>")
      }

      console.log("<b class='ktory'>4.</b><br>")
      for (let plus = 0; plus < this.gameBoardArray.length - 1; plus++) {
        console.log(plus.toString(), "*|  ");
        for (let i = this.gameBoardArray.length - 1; i > 0; i--) {
          for (let j = this.gameBoardArray.length - 1; j > 0; j--) {
            if (i + j == this.gameBoardArray.length + plus) {
              // console.log("b2");
              console.log(this.gameBoardArray[j][i])
            }
          }
        }
        console.log("<br>")
      }
    }

    console.log("<hr>")

    //pionowo i poziomo
    {
      console.log("<b class='ktory'>5.</b><br>")
      for (let i = 0; i < this.gameBoardArray.length; i++) {
        console.log(i.toString(), "|  ");
        for (let j = 0; j < this.gameBoardArray.length; j++) {
          console.log(this.gameBoardArray[j][i])
        }
        console.log("<br>");
      }

      console.log("<b class='ktory'>6.</b><br>")
      for (let i = 0; i < this.gameBoardArray.length; i++) {
        console.log(i.toString(), "|  ");
        for (let j = 0; j < this.gameBoardArray.length; j++) {
          console.log(this.gameBoardArray[i][j])
        }
        console.log("<br>");
      }
    }


    console.log("<hr>* - numerek nie oznacza rzedu")
    /**
     * "_" - puste
     * "X" - x
     * "O" - o
     */
  }
}
