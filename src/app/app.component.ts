import { Component, OnInit } from '@angular/core';
import { ai } from './components/ai/ai.component';
// import { makeMove } from './features/makeMove.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "tic-tac-toe"
  text1 = 'Hello World';
  count1 = 0;
  ai = new ai();
  columns: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  rows: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  ngOnInit() {
    this.ai.countMove();
  }

  click1() {
    this.count1++;
  }
}
