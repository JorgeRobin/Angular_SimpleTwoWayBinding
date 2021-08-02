import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counterValue = 0;

  @Input()
   get counter() {
    return this.counterValue;
  }

  set counter(value) {
    this.counterValue = value;
  }

  @Output() counterChange = new EventEmitter();

  decrement() {
    this.counter--;
    this.counterChange.emit(this.counter);
  }

  increment() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

}
