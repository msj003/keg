import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  pintCount = 0 ;

  constructor() { }

  ngOnInit() {
  }

  countPlus(){
    this.pintCount++;
  }

  countReset(){
    this.pintCount = 0;
  }

}
