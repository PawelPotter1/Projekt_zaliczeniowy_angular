import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherdataService } from '../../services/weatherdata.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(private formBuilder: FormBuilder, 
              private weatherService:WeatherdataService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
    location: ['']
});
  }

sendTo(formValues) {
  this.weatherService.getWeather(formValues.location)
    .subscribe(data => 
      this.weatherData = data
//      {
//        this.weatherData.city = data['name']
//        this.weatherData.conditions = data['weather'][0]['main']
//        this.weatherData.temperature = Math.round((data['main']['temp']-273.15))
//        this.weatherData.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])
//      }
      )
    console.log(this.weatherData)
    this.weatherService.pogoda_obj = this.weatherData
}

}
