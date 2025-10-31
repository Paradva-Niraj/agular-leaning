import { Component,Output,EventEmitter } from '@angular/core';
import { App } from '../app';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  count: number = 0;

  @Output() buttonClicked = new EventEmitter<String>();

 
  handleCounter(val: string) {
    if (val == 'plus') {
      this.count = this.count + 1;
      this.buttonClicked.emit("add");
    }
    else if (val == 'minus') {
      this.count = this.count - 1;
      this.buttonClicked.emit("minus");
    }
    else {
      this.count = 0;
      this.buttonClicked.emit("reset");
    }
  }
}
