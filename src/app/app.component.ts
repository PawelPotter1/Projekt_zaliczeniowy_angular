import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherdataService } from './services/weatherdata.service';
import { Weathermodel } from './components/weather/weathermodel';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tab = '';

  private appId: string;
  private appCode: string;

  weather: Weathermodel = {
    city: "No city",
    conditions: "-",
    temperature: 0,
    icon: ""
  }

  public constructor(private http: HttpClient,
                      private weatherService: WeatherdataService) {
  //  this.weather = [];
  }

  sendToGeo() {
    this.weatherService.getWeatherGeo().subscribe(data=>{
//      this.weather.conditions = data['current']['weather'][0]['main']
//      this.weather.temperature = Math.round((data['current']['main']['temp']-273.15))
      this.weather.icon = this.weatherService.getIconUrl(data['current']['weather'][0]['icon'])
     console.log(this.weather.icon)
                    });
  }

  public ngOnInit() {
    this.sendToGeo();
  }  ;
 
}
