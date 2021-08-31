import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: []
})
export class CalenderComponent implements OnInit {
  date: Date;

  constructor() { }

  ngOnInit(): void {
  }
  selectDate(){
//TODO open component
  }

}
