import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const pageUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
const pageUrlcor: String = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey: String =  '6a25213c0c3b697479aff43cfb1aa86c'

const api_url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=6a25213c0c3b697479aff43cfb1aa86c";

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private http: HttpClient) { }

  getWeather(city: String) {
    return this.http.get(pageUrl+ '?q=' + city + '&APPID=' + apiKey)
  }

  getIconUrl (icon: String) {
    return 'http://openweathermap.org/img/wn/' + icon + ".png"
  }

  getWeatherGeo () {
    let lat: number = 0;
    let lon: number = 0;
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // return this.http.get(pageUrlcor+ '?lat='+ position.coords.latitude+ '?lon='+position.coords.latitude + '?cnt=' + 7 +'&APPID=' + apiKey)
        lat = position.coords.latitude;
        lon = position.coords.latitude;
      })
    } else {
        console.error("Przeglądarka nie wspiera geolokalizacji")
    }
    if( lat!=0 && lon!=0) return this.http.get(pageUrlcor+ '?lat='+ lat+ '?lon='+lon + '?cnt=' + 7 +'&APPID=' + apiKey)
  }

}
