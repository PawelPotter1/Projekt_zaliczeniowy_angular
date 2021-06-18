import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  myDate: Date;
  
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.myDate = new Date();
    }, 1000);
  }

}
