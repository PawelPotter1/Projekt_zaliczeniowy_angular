import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { User } from '../models/user';
import { WeatherdataService } from 'src/app/services/weatherdata.service';
import { HttpClient } from '@angular/common/http';
import { Weathermodel } from 'src/app/components/weather/weathermodel';

const pageUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey: String =  '6a25213c0c3b697479aff43cfb1aa86c'

@Component({
  selector: 'profile-bar',
  templateUrl: './profile-bar.component.html',
  styleUrls: ['./profile-bar.component.css']
})
export class ProfileBarComponent implements OnInit {

  constructor(private http: HttpClient,
              private profileService:ProfileService, 
              protected auth:AuthService,
              private weatherService: WeatherdataService) { }


  profile:User;
  myDate: Date;

  title = 'app';
  tab = '';
  
  weather: Weathermodel = {
    city: "No city",
    conditions: "-",
    temperature: 0,
    icon: ""
  }
  
  public longitude: number;
  public latitude: number;

  public getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log(this.latitude);
          console.log(this.longitude);
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  setWeatherGeo () {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log("COORDYNATY: "+position.coords.latitude)
        this.getWeatherGeo(position.coords.latitude, position.coords.longitude)
        .subscribe(data1 => {
          this.weather.city = (data1['name'])
          this.weather.temperature = Math.round((data1['main']['temp']-273.15))
          this.weather.icon = this.getIconUrl(data1['weather'][0]['icon'])
        });
      });
    } else {
        console.error("Przeglądarka nie wspiera geolokalozacji")
    }
  }

  getWeather(city: String) {
    return this.http.get(pageUrl+ '?q=' + city + '&APPID=' + apiKey)
  }

  getWeatherGeo(lat, lon) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather'
    +'?lat='+ lat
    +'&lon='+ lon 
    +'&APPID=' + apiKey)
  }

  getIconUrl (icon: String) {
    return 'http://openweathermap.org/img/wn/' + icon + ".png"
  }


  ngOnInit() {
    this.setWeatherGeo()
    this.profileService.getUserProfile()
    .subscribe(user =>{
      this.profile = user
    })

  }


}
