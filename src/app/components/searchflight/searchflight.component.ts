import { Component, OnInit } from '@angular/core';
import {FlightdetailService} from '../../services/flightdetail.service';
import {Router} from '@angular/router';
import { flightDetailsModel } from './flightDetailsModel';

let a: number = 0;
let b: number = 0;

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.scss']
})
export class SearchflightComponent implements OnInit {
 constructor(private flightdetails: FlightdetailService, private router:Router) { 
    
  }

  ngOnInit() {}

  ngDoCheck(){
if (this.Input.departurePlace!==''||this.Input.arrivalPlace!=='')
this.airplane = this.checkAirplane(this.Input.departurePlace, this.Input.arrivalPlace!=='')
  }

  departurePlaces = [
    { code: 'KTW', city: 'Katowice', local: 1 },
    { code: 'WRO', city: 'Wrocław', local: 1 },
    { code: 'POZ', city: 'Poznań', local: 1 }
  ];
  arrivalPlaces = [
    { code: 'NYC', city: 'New York', local: 3 },
    { code: 'FRA', city: 'Franfurkt', local: 2 },
    { code: 'WAW', city: 'Warszawa', local: 1 }
  ];


  // departurePlaceInput;
  // arrivalPlaceInput;
  // departureDateInput;
  // arrivalDateInput;
  // personsInput:number
  isValid:boolean = true;
  today: number = Date.now();
  airplane: number = 0;

  Input: flightDetailsModel = {
    departurePlace: '',
    arrivalPlace: '',
    departureDate: 0,
    arrivalDate: 0,
    persons: 0,
    senior: false,
    kid: false,
    bagage: '',
    price: 0
  }

   checkAirplane(placeDeparture, arrivalPlace) {
     for(let i=0;i++;this.departurePlaces.length) {
       if (this.departurePlaces[i].city==placeDeparture) 
       a = this.departurePlaces[i].local;
     }
     for(let i=0;i++;this.arrivalPlaces.length) {
      if (this.arrivalPlaces[i].city==arrivalPlace) 
       if (a<this.arrivalPlaces[i].local) {a=this.arrivalPlaces[i].local};
     }
  //   console.log("suma: "+a)
  //   this.flightdetails.airplane = a;
  //   this.airplane = a;
    return a
  }

  save(){
    this.flightdetails.placeOfDeparture = this.Input.departurePlace;
    this.flightdetails.placeOfArrival = this.Input.arrivalPlace;
    this.flightdetails.dateOfDeparture = this.Input.departureDate;
    this.flightdetails.dateOfArrival = this.Input.arrivalDate;
    this.flightdetails.personsOfFlight = this.Input.persons;
    this.flightdetails.airplane = 1
    if(this.Input.departurePlace == '' || this.Input.arrivalPlace=='') 
        {  this.isValid = false; alert("Nie wypełniłeś miejsca startu lub lądowania") }
    if(this.Input.departurePlace == this.Input.arrivalPlace) 
        {  this.isValid = false; alert("Miejsce wylotu jest takie samo jak miejsce lądowania") }
     if(this.Input.departureDate == 0 || this.Input.arrivalDate == 0) 
         {  this.isValid = false; alert('Data wylotu lub powrotu jest pusta')}
    if(this.Input.departureDate == this.Input.arrivalDate) 
         {  this.isValid = false; alert('Data wylotu jest taka sama')}
     if(this.Input.departureDate < this.today || this.Input.arrivalDate < this.today) 
         {  this.isValid = false;  alert('Data wylotu lub powrotu jest z przeszłości')}
     if(this.Input.departureDate > this.Input.arrivalDate) 
         {  this.isValid = false; alert('Data wylotu jest późniejsza niż przylotu')}
      if(this.Input.persons = null) 
         {  this.isValid = false; alert("Nie wskzałeś ilości miejsc do rezerwacji") }    
        if (this.isValid){ this.router.navigate(["/simplelogin"]) }
  }
}
