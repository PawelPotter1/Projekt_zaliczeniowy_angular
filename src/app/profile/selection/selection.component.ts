import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherdataService} from '../../services/weatherdata.service'
import { Weathermodel } from '../../components/weather/weathermodel'

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  @Output () onSelection: EventEmitter<Weathermodel> = new EventEmitter<Weathermodel>()
  weather: Weathermodel = new Weathermodel()
  city: any;

  constructor(public weatherData: WeatherdataService) { }

submit() {
  this.weatherData.getWeather(this.city).subscribe(data => {
    this.weather.city = data['name']
    this.weather.conditions = data['weather'][0]['main']
    this.weather.temperature = Math.round((data['main']['temp']-273.15))
    this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])
    console.log(this.weather)
    this.onSelection.emit(this.weather)
  })
}

  ngOnInit(): void {
  }

}
