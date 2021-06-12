import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from 'src/app/services/weatherdata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private weatherData: WeatherdataService) { }

temperatura: number = this.weatherData.temperature;

  ngOnInit(): void {

    }
  
}
