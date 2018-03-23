import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  odd = [];
  even = [];
  onClickedStart (firedNumber: number) {
    console.log(firedNumber);
    if (firedNumber % 2 === 0 ) {
      this.even.push(firedNumber);
    } else {
      this.odd.push(firedNumber);
    }
    console.log('even:' + this.even);
    console.log('odd: ' + this.odd);
  }
}
