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

  ngDoCheck() {
    this.departurePlaceOnScreen = this.flightdetails.placeOfDeparture;
    this.arrivalPlaceOnScreen = this.flightdetails.placeOfArrival;
  }

}
