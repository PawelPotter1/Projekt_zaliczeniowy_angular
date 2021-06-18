import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightdetailService } from 'src/app/services/flightdetail.service';
import { flightDetailsModel } from '../searchflight/flightDetailsModel';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  constructor(private flightdetails: FlightdetailService, private router:Router) { }

  ngOnInit(): void {
    this.OnScreen.departurePlace = this.flightdetails.placeOfDeparture;
    this.OnScreen.arrivalPlace = this.flightdetails.placeOfArrival;
    this.OnScreen.departureDate = this.flightdetails.dateOfDeparture;
    this.OnScreen.arrivalDate = this.flightdetails.dateOfArrival;
    this.OnScreen.persons = this.flightdetails.personsOfFlight;
    this.OnScreen.kid = this.flightdetails.kid;
    this.OnScreen.senior = this.flightdetails.senior
    this.OnScreen.bagage = this.flightdetails.bagage;
  }
  
  OnScreen: flightDetailsModel = {
    departurePlace: 'Wrocław',
    arrivalPlace: '',
    departureDate: 0,
    arrivalDate: 0,
    persons: 0,
    senior: false,
    kid: false,
    bagage: '',
    price: 0
  }

checkAirplan(departurePlace, arrivalPlace) {
    
}

}
