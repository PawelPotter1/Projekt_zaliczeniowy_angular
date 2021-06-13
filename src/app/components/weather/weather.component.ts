import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherdataService } from 'src/app/services/weatherdata.service';
import { Weathermodel} from './weathermodel'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public weatherData: any;
  
  weather: Weathermodel = {
    city: "No city",
    conditions: "-",
    temperature: 0,
    icon: ""
  }

  constructor(private formBuilder: FormBuilder,
              private weatherService: WeatherdataService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendTo(formValue) {
    this.weatherService.getWeather(formValue.location)
                    .subscribe(data=>{
                      // this.weatherData = data;
                      // console.log(this.weatherData)
      this.weather.city = data['name']
      this.weather.conditions = data['weather'][0]['main']
      this.weather.temperature = Math.round((data['main']['temp']-273.15))
      this.weather.icon = this.weatherService.getIconUrl(data['weather'][0]['icon'])
      console.log(this.weather.icon)
                    })
    ;
  }


  update(weather:Weathermodel) {
    this.weather = weather
    console.log(weather.conditions)
    }


}
