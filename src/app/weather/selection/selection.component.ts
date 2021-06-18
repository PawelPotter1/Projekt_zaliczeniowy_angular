import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherdataService} from '../../../services/weatherdata.service'
import { Weathermodel } from '../models/weathermodel'

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  @Output () onSelection: EventEmitter<Weathermodel> = new EventEmitter<Weathermodel>()
  weather: Weathermodel = new Weathermodel()
  city: String = ""

  constructor(public weatherData: WeatherdataService) { }

submit() {
  this.weatherData.load(this.city).subscribe(data => {
    this.weather.city = data['name']
    this.weather.conditions = data['weather'][0]['main']
    this.weather.temperature = Math.round((data['main']['temp']-273.15))
    this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])
    console.log(this.weather)

    this.weatherData.city = data['name'];
    this.weatherData.conditions = data['weather'][0]['main']
    this.weatherData.temperature = Math.round((data['main']['temp']-273.15))
    this.weatherData.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])
    console.log(this.weatherData.temperature)

    this.onSelection.emit(this.weather)
  })
}

  ngOnInit(): void {
  }

}
