import { Component, OnInit } from '@angular/core';
import {FlightdetailService} from '../../services/flightdetail.service';
import {Router} from '@angular/router';

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
    { code: 'KTW', city: 'Katowice' },
    { code: 'WR', city: 'Wrocław' },
    { code: 'GD', city: 'Gdańsk' }
  ];
  arrivalPlaces = [
    { code: 'CHA', city: 'Chania' },
    { code: 'FR', city: 'Franfurkt' },
    { code: 'BR', city: 'Bruksela' }
  ];
  departurePlaceInput;
  arrivalPlaceInput;
  departureDateInput;
  arrivalDateInput;
  personsInput;

  save(){
    this.flightdetails.placeOfDeparture = this.departurePlaceInput;
    this.flightdetails.placeOfArrival = this.arrivalPlaceInput;
    this.flightdetails.dateOfDeparture = this.departureDateInput;
    this.flightdetails.dateOfArrival = this.arrivalDateInput;
    this.flightdetails.personsOfFlight = this.personsInput;
    this.router.navigate(["/trip"])
  }
}
