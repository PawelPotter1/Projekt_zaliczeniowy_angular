import { Component, OnInit } from '@angular/core';
import {FlightdetailService} from '../../services/flightdetail.service';
import {Router} from '@angular/router';
import { flightDetailsModel } from './flightDetailsModel';


@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.scss']
})
export class SearchflightComponent implements OnInit {
 constructor(private flightdetails: FlightdetailService, private router:Router) { 
    
  }

  ngOnInit() {}
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

  // departurePlaceInput;
  // arrivalPlaceInput;
  // departureDateInput;
  // arrivalDateInput;
  // personsInput:number
  isValid:boolean = true;
  today: number = Date.now();

  doCheck(){

  }

  save(){
    this.flightdetails.placeOfDeparture = this.Input.departurePlace;
    this.flightdetails.placeOfArrival = this.Input.arrivalPlace;
    this.flightdetails.dateOfDeparture = this.Input.departureDate;
    this.flightdetails.dateOfArrival = this.Input.arrivalDate;
    this.flightdetails.personsOfFlight = this.Input.persons;
    
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
      if(this.Input.persons = 0) 
         {  this.isValid = false; alert("Nie wskzałeś ilości miejsc do rezerwacji") }    
        if (this.isValid){ this.router.navigate(["/trip"]) } 
        else {this.isValid = true; console.log('Miejsce wyloty jest takie samo jak lądowania?')}
  }
}
