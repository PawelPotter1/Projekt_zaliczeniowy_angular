import { Injectable } from '@angular/core';

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
}
