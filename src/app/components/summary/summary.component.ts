import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightdetailService } from 'src/app/services/flightdetail.service';
import { flightDetailsModel } from '../searchflight/flightDetailsModel';

let departurePlace: string;
let arrivalPlace: string;
// let departureDate: number;
// let arrivalDate: number;
let persons: number;
let ticets: number;
let discountKid: any;
let discountSenior:any; 
let bagage: string; 

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  constructor(private flightdetails: FlightdetailService, private router:Router) { }

  ngOnInit(): void {
    departurePlace = this.OnScreen.departurePlace = this.flightdetails.placeOfDeparture;
    arrivalPlace = this.OnScreen.arrivalPlace = this.flightdetails.placeOfArrival;
    this.OnScreen.departureDate = this.flightdetails.dateOfDeparture;
    this.OnScreen.arrivalDate = this.flightdetails.dateOfArrival;
    ticets = this.OnScreen.persons = this.flightdetails.personsOfFlight;
    discountKid = this.OnScreen.kid = this.flightdetails.kid;
    discountSenior =this.OnScreen.senior = this.flightdetails.senior
    bagage = this.OnScreen.bagage = this.flightdetails.bagage;
    this.countPrice(departurePlace, arrivalPlace, ticets, discountKid, discountSenior, bagage )
  }
price;
bagagePrice;
  
countPrice(departurePlace, arrivalPlace, ticets, discountKid, discountSenior, bagage ) {
    for (let i=0;i++;this.flightBagage.length){
      if(this.flightBagage[i]=bagage) this.bagagePrice = this.flightBagage[i].price
    }
    for(let i=0;i++;this.flightPrice.length) {
      if(this.flightPrice[i].depCity==departurePlace&&this.flightPrice[i]==arrivalPlace) {
      this.price = this.flightPrice[i].price*ticets*this.bagagePrice;} else {alert('Nie można przeliczyć ceny')}
      if (discountKid) this.price = this.flightPrice[i].price*this.flightDiscountKid;
      if (discountSenior&&!discountKid) this.price = this.flightPrice[i].price*this.flightDiscountSenior;
    }
    return this.price;
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

  flightPrice = [
    {zone: 3, depCity: 'Katowice',arrCity: 'New York',price: 1000},
    {zone: 2, depCity: 'Katowice',arrCity: 'Frankfurt',price: 400},
    {zone: 1, depCity: 'Katowice',arrCity: 'Warszawa',price: 300},
    {zone: 3, depCity: 'Poznań',arrCity: 'New York',price: 1000},
    {zone: 3, depCity: 'Wrocław',arrCity: 'New York',price: 1000},
    {zone: 2, depCity: 'Wrocław',arrCity: 'Frankfurt',price: 400},
    {zone: 1, depCity: 'Wrocław',arrCity: 'Warszawa',price: 300},
    {zone: 2, depCity: 'Poznań',arrCity: 'Frankfurt',price: 400},
    {zone: 1, depCity: 'Poznańw',arrCity: 'Warszawa',price: 300},
];

flightDiscountKid = 0.50;
flightDiscountSenior = 0.40;

flightBagage = [
  {hight: "smal", price: 0},
  {hight: "nonregistered", price: 100},
  {hight: "registered", price: 200}
]


}
