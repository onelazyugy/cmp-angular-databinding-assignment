import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() generatedNumberCreated = new EventEmitter<number>();

  generatedNumber: number = 0;
  intervalRef;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.intervalRef = setInterval(() => {
      this.generatedNumber = this.generatedNumber + 1;
      this.generatedNumberCreated.emit(this.generatedNumber);
    }, 1000);
  }

  onStop() {
    clearInterval(this.intervalRef);
  }
}
