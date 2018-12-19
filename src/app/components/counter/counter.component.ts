import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() count;
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() reset = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
