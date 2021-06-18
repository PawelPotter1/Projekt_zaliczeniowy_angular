import { Injectable } from '@angular/core';
import { flightDetailsModel } from '../components/searchflight/flightDetailsModel';

@Injectable({
  providedIn: 'root'
})
export class FlightdetailService {

  constructor() { }
  placeOfDeparture;
  dateOfDeparture;
  placeOfArrival;
  dateOfArrival;
  personsOfFlight;
  kid;
  senior;
  bagage;
  airplane;

  flightDateils: flightDetailsModel = {
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
}
