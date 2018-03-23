import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() clickedStart = new EventEmitter<number>();
  start: any;
  a = 0;
  constructor() { }

  ngOnInit() {
    // this.stop = clearInterval(this.ref);
  }

  clickStart() {
   this.start = setInterval(() => {
    this.clickedStart.emit(this.a + 1);
    this.a++;
    // console.log(this.a++);
   }, 1000);
  }

  clickStop() {
    clearInterval(this.start);
  }


}
