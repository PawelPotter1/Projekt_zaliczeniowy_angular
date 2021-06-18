import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleTimeFormat } from '@angular/common';

const pageUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
//                                api.openweathermap.org/data/2.5/weather?lat=
const apiKey: String =  '6a25213c0c3b697479aff43cfb1aa86c'
var long = 0;
var lat = 0;

const api_url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=6a25213c0c3b697479aff43cfb1aa86c";

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  test: string;
  public longitude: number;
  public latitude: number;

  constructor(private http: HttpClient) { }

  getWeather(city: String) {
    return this.http.get(pageUrl+ '?q=' + city + '&APPID=' + apiKey)
  }

  getIconUrl (icon: String) {
    return 'http://openweathermap.org/img/wn/' + icon + ".png"
  }

  getLocation() {
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

  public getLon(): number{
    navigator.geolocation.getCurrentPosition(position => {
      this.longitude = position.coords.longitude
    })
    return this.longitude
  }

  public getLat(): number{
    navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude
    })
    return this.latitude
  }

  getWeatherGeo (lat:number, long:number) {   
        console.log("Scieżka :"+pageUrl+ '?lat='+ lat + '?lon='+ long + '?cnt=' + 7 +'&APPID=' + apiKey)
        return this.http.get(pageUrl+ '?lat='+ lat + '?lon='+ long + '?cnt=' + 7 +'&APPID=' + apiKey)
  }

   setWeatherGeo () {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.http.get(pageUrl+ '?lat='+ position.coords.latitude+ '?lon='+position.coords.latitude + '?cnt=' + 7 +'&APPID=' + apiKey)
               .subscribe( data => {
                 this.test = this.getIconUrl(data['weather'][0]['icon'])
               })
      })
   } else {
       console.error("Przeglądarka nie wspiera geolokalizacji")
    }
   return this.test
 }
}
