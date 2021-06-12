import { Component, OnInit } from '@angular/core';
import { Weathermodel} from './models/weathermodel'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Weathermodel = {
    city: "No city",
    conditions: "-",
    temperature: 0,
    icon: ""
  }

  update(weather:Weathermodel) {
    this.weather = weather
    console.log(weather.conditions)
    }

  constructor() { }

  ngOnInit(): void {
  }

}
