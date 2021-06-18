import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightdetailService} from '../../services/flightdetail.service';
import { flightDetailsModel } from '../searchflight/flightDetailsModel';


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  constructor(private flightdetails: FlightdetailService, private router:Router) { }

  airplane = this.flightdetails.airplane;

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

  // departurePlaceOnScreen;
  // arrivalPlaceOnScreen;
  // departureDateOnScreen;
  // arrivalDateOnScreen;
  // personsOnScreen;

  onScreen(){
    this.flightdetails.placeOfDeparture = this.OnScreen.departurePlace;
    this.flightdetails.placeOfArrival = this.OnScreen.arrivalPlace;
    this.flightdetails.dateOfDeparture = this.OnScreen.departureDate;
    this.flightdetails.dateOfArrival = this.OnScreen.arrivalDate;
    this.flightdetails.personsOfFlight = this.OnScreen.persons;
    this.flightdetails.kid = this.OnScreen.kid;
    this.flightdetails.senior = this.OnScreen.senior;
    this.flightdetails.bagage = this.OnScreen.bagage;
  }

  ngDoCheck() {
    this.onScreen();
    //  if(this.flightdetails.senior && this.flightdetails.kid) 
    //     {   alert("Zniżki nie mogą obowiązywać jednocześnie dla dzieci i seniorów") 
    //     this.flightdetails.senior == false
    //     this.flightdetails.kid == false
    //     break
    //     }
  }

  

}
