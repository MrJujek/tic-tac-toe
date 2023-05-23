// example.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss']
})
export class ai {
  text = "Hello World";

  countMove() {

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

    let board_8x8 = [
      // ["_", "_", "_", "_", "_", "_", "_", "_"], // 0
      // ["_", "_", "_", "_", "_", "_", "_", "_"], // 1
      // ["_", "_", "_", "_", "_", "_", "_", "_"], // 2
      // ["_", "_", "_", "_", "_", "_", "_", "_"], // 3
      // ["_", "_", "_", "_", "_", "_", "_", "_"], // 4
      // ["_", "_", "_", "_", "_", "_", "_", "_"], // 5
      // ["_", "_", "_", "_", "_", "_", "_", "_"], // 6
      // ["_", "_", "_", "_", "_", "_", "_", "_"]  // 7
      //0    1    2    3    4    5    6    7
      ["7", "a", "b", "c", "d", "e", "f", "g"],// 0
      ["6", "7", "a", "b", "c", "d", "e", "f"],// 1
      ["5", "6", "7", "a", "b", "c", "d", "e"],// 2
      ["4", "5", "6", "7", "a", "b", "c", "d"],// 3
      ["3", "4", "5", "6", "7", "a", "b", "c"],// 4
      ["2", "3", "4", "5", "6", "7", "a", "b"],// 5
      ["1", "2", "3", "4", "5", "6", "7", "a"],// 6
      ["0", "1", "2", "3", "4", "5", "6", "9"] // 7
      // [1, 2, 3],
      // [4, 5, 6],
      // [7, 8, 9]
    ];

    document.write("<pre>")

    //z lewej gory w prawy dol
    {
      document.write("<b class='ktory'>1.</b><br>")
      for (let minus = 0; minus < board_8x8.length; minus++) {
        document.write(minus.toString(), "|  ");
        for (let i = 0; i < board_8x8.length; i++) {
          for (let j = 0; j < board_8x8.length; j++) {
            if (i - minus == j) {
              // console.log("a1");
              document.write(board_8x8[i][j])
            }
          }
        }
        document.write("<br>")
      }

      document.write("<b class='ktory'>2.</b><br>")
      for (let plus = 1; plus < board_8x8.length; plus++) {
        document.write(plus.toString(), "|  ");
        for (let i = 0; i < board_8x8.length; i++) {
          for (let j = 0; j < board_8x8.length; j++) {
            if (i + plus == j) {
              // console.log("a2");
              document.write(board_8x8[i][j])
            }
          }
        }
        document.write("<br>")
      }
    }

    document.write("<hr>")

    //z prawej gory w dol lewo
    {
      document.write("<b class='ktory'>3.</b><br>")
      for (let minus = 1; minus <= board_8x8.length; minus++) {
        document.write(minus.toString(), "*|  ");
        for (let i = board_8x8.length - 1; i >= 0; i--) {
          for (let j = board_8x8.length - 1; j >= 0; j--) {
            if (i + j == board_8x8.length - minus) {
              // console.log("b1");
              document.write(board_8x8[j][i])
            }
          }
        }
        document.write("<br>")
      }

      document.write("<b class='ktory'>4.</b><br>")
      for (let plus = 0; plus < board_8x8.length - 1; plus++) {
        document.write(plus.toString(), "*|  ");
        for (let i = board_8x8.length - 1; i > 0; i--) {
          for (let j = board_8x8.length - 1; j > 0; j--) {
            if (i + j == board_8x8.length + plus) {
              // console.log("b2");
              document.write(board_8x8[j][i])
            }
          }
        }
        document.write("<br>")
      }
    }

    document.write("<hr>")

    //pionowo i poziomo
    {
      document.write("<b class='ktory'>5.</b><br>")
      for (let i = 0; i < board_8x8.length; i++) {
        document.write(i.toString(), "|  ");
        for (let j = 0; j < board_8x8.length; j++) {
          document.write(board_8x8[j][i])
        }
        document.write("<br>");
      }

      document.write("<b class='ktory'>6.</b><br>")
      for (let i = 0; i < board_8x8.length; i++) {
        document.write(i.toString(), "|  ");
        for (let j = 0; j < board_8x8.length; j++) {
          document.write(board_8x8[i][j])
        }
        document.write("<br>");
      }
    }


    document.write("<hr>* - numerek nie oznacza rzedu")
    /**
     * "_" - puste
     * "X" - x
     * "O" - o
     */
  }
}
