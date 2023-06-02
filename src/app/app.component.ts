import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rowInput: string = "20";
  columnInput: string = "20";
  columns: number[] = [];
  rows: number[] = [];
  cellValues: string[][] = [];
  currentPlayer: string = 'X';
  gameOver: boolean = false;
  winner: string = '';
  playerScores: { [key: string]: number } = { X: 0, O: 0 };
  winningScore: number = 5;

  start() {
    console.log("start");

    this.rows = Array.from({ length: parseInt(this.rowInput) }, (_, i) => i + 1);
    this.columns = Array.from({ length: parseInt(this.columnInput) }, (_, i) => i + 1);
    this.cellValues = this.initializeCellValues(parseInt(this.rowInput), parseInt(this.columnInput));
    this.currentPlayer = 'X';
    this.gameOver = false;
    this.winner = '';
    this.playerScores = { X: 0, O: 0 };
  }

  initializeCellValues(rows: number, columns: number): string[][] {
    const cellValues: string[][] = [];
    for (let i = 0; i < rows; i++) {
      const row: any[] = [];
      for (let j = 0; j < columns; j++) {
        row.push('');
      }
      cellValues.push(row);
    }
    return cellValues;
  }

  makeMove(row: number, column: number) {
    if (!this.gameOver && this.cellValues[row][column] == '') {
      this.cellValues[row][column] = this.currentPlayer;

      console.log("makeMove");
      this.ai()

      // this.checkWinCondition(row, column);
      if (!this.gameOver) {
        this.switchPlayer();
        this.makeComputerMove();
      }
    }
  }

  ai() {
    console.log("ai");

    // Check for a draw
    if (this.isBoardFull()) {
      this.setDraw();
      return;
    }

    let array = []

    //z lewej dol w gore prawo
    for (let minus = 0; minus < this.cellValues.length; minus++) {
      array = []

      for (let i = 0; i < this.cellValues.length; i++) {
        for (let j = 0; j < this.cellValues.length; j++) {
          if (i - minus == j) {
            array.push({ value: this.cellValues[i][j], row: i, column: j })
          }
        }
      }

      // sprawdzanie wygranej
      this.checkForLine(array);
    }

    for (let plus = 1; plus < this.cellValues.length; plus++) {
      array = []

      for (let i = 0; i < this.cellValues.length; i++) {
        for (let j = 0; j < this.cellValues.length; j++) {
          if (i + plus == j) {
            array.push({ value: this.cellValues[i][j], row: i, column: j })
          }
        }
      }

      // sprawdzanie wygranej
      this.checkForLine(array);
    }


    //z prawej gory w dol lewo
    for (let minus = 1; minus <= this.cellValues.length; minus++) {
      array = []

      for (let i = this.cellValues.length - 1; i >= 0; i--) {
        for (let j = this.cellValues.length - 1; j >= 0; j--) {
          if (i + j == this.cellValues.length - minus) {
            array.push({ value: this.cellValues[j][i], row: j, column: i })
          }
        }
      }

      // sprawdzanie wygranej
      this.checkForLine(array);
    }

    for (let plus = 0; plus < this.cellValues.length - 1; plus++) {
      array = []

      for (let i = this.cellValues.length - 1; i > 0; i--) {
        for (let j = this.cellValues.length - 1; j > 0; j--) {
          if (i + j == this.cellValues.length + plus) {
            array.push({ value: this.cellValues[j][i], row: j, column: i })
          }
        }
      }

      // sprawdzanie wygranej
      this.checkForLine(array);
    }

    // pionowo
    for (let i = 0; i < this.columns.length; i++) {
      array = []

      for (let j = 0; j < this.rows.length; j++) {
        array.push({ value: this.cellValues[j][i], row: j, column: i })
      }

      // sprawdzanie wygranej
      this.checkForLine(array);
    }

    // poziomo
    for (let i = 0; i < this.rows.length; i++) {
      array = []

      for (let j = 0; j < this.columns.length; j++) {
        array.push({ value: this.cellValues[i][j], row: i, column: j })
      }

      // sprawdzanie wygranej
      this.checkForLine(array);
    }
  }

  // ruch komputera (na razie losowo)
  makeComputerMove() {
    const emptyCells = [];
    for (let i = 0; i < this.rows.length; i++) {
      for (let j = 0; j < this.columns.length; j++) {
        if (this.cellValues[i][j] === '') {
          emptyCells.push({ row: i, column: j });
        }
      }
    }
    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const randomCell = emptyCells[randomIndex];
      this.cellValues[randomCell.row][randomCell.column] = 'O';

      if (!this.gameOver) {
        this.switchPlayer();
      }
    }
  }

  // zmiana gracza po ruchu
  switchPlayer() {
    this.currentPlayer = this.currentPlayer == 'X' ? 'O' : 'X';
  }

  // remis
  setDraw() {
    this.gameOver = true;
    this.winner = 'Draw';
  }

  // sprawdza czy sa wolne pola
  isBoardFull(): boolean {
    for (let i = 0; i < this.rows.length; i++) {
      for (let j = 0; j < this.columns.length; j++) {
        if (this.cellValues[i][j] == '') {
          return false;
        }
      }
    }
    return true;
  }

  // daje wartosc komorki
  getCellValue(row: number, column: number): string {
    return this.cellValues[row][column] || '';
  }

  // do kolorowania
  isWinCell(rowIndex: number, columnIndex: number): boolean {
    // console.table(this.cellValues);
    if (this.cellValues[rowIndex][columnIndex] === 'x' || this.cellValues[rowIndex][columnIndex] === 'o') {
      return true;
    }
    return false;
  }

  // dodaje punkty
  addPoint(player: string) {
    this.playerScores[player]++;
    if (this.playerScores[player] === this.winningScore) {
      this.gameOver = true;
      this.winner = player;
    }
  }

  checkForLine(array: any[]) {
    for (let k = 0; k < array.length; k++) {
      if (array[k].value != '' && (array[k].value == "X" || array[k].value == "O") && k + this.winningScore <= array.length) {
        let isWinningLine = true;

        for (let l = 0; l < this.winningScore; l++) {
          if (array[k].value != array[k + l].value) {
            isWinningLine = false;
          }
        }

        if (isWinningLine) {
          console.log("wygrana")
          this.addPoint(array[k].value);

          for (let l = 0; l < this.winningScore; l++) {
            this.cellValues[array[k + l].row][array[k + l].column] = this.cellValues[array[k + l].row][array[k + l].column].toLowerCase();
          }

          k += 4;
        }
      }
    }
  }
}
