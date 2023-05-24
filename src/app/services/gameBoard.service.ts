import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameBoardService {
  private gameBoardArray: string[][];

  constructor() {
    // Initialize the game board array
    this.gameBoardArray = [
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
  }

  // Method to retrieve the game board array
  getGameBoardArray(): string[][] {
    return this.gameBoardArray;
  }

  // Method to update the game board array
  updateGameBoardArray(newArray: string[][]): void {
    this.gameBoardArray = newArray;
  }
}
