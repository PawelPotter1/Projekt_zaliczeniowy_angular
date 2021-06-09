import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myDate: Date;

  constructor() { }

  ngOnInit(): void {
      setInterval(() => {
        this.myDate = new Date();
        console.log(this.myDate);
      }, 1000);
    }
  

}
