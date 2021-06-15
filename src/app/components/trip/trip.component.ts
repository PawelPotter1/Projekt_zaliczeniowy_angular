import { Component, OnInit } from '@angular/core';
import { FlightdetailService} from '../../services/flightdetail.service';


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  constructor(private flightdetails: FlightdetailService) { }

  ngOnInit(): void {
  }
  departurePlaceOnScreen;
  arrivalPlaceOnScreen;
  departureDateOnScreen;
  arrivalDateOnScreen;
  personsOnScreen;

  ngDoCheck() {
    this.departurePlaceOnScreen = this.flightdetails.placeOfDeparture;
    this.arrivalPlaceOnScreen = this.flightdetails.placeOfArrival;
    this.departureDateOnScreen = this.flightdetails.dateOfDeparture;
    this.arrivalDateOnScreen = this.flightdetails.dateOfArrival;
    this.personsOnScreen = this.flightdetails.personsOfFlight;
  }

}
