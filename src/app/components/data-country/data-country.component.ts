import { Component, OnInit } from '@angular/core';
import {CountryDataService} from '../../services/country-data.service';
import { ActivatedRoute} from '@angular/router';
import { countryDetails } from './data'

@Component({
  selector: 'app-data-country',
  templateUrl: './data-country.component.html',
  styleUrls: ['./data-country.component.scss']
})
export class DataCountryComponent implements OnInit {

  constructor(private countryData: CountryDataService, 
              private activateRoute: ActivatedRoute ) { 

  }

  chosenCountry;

  population;
  lang;
  country;
  capital;
  currency;
  ludnosc;
  countryDetails;
  name;
  id;
  area;

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(
      data => {
        this.chosenCountry = data.get.name;
        console.log(data.get.name)
        this.countryDetails.id = data.get.id,
        this.name = data.name.value,
        this.capital =  Object(countryDetails).details,
        this.population = data.details.population.value,
        this.lang = data.details.language.value
      this.country = data.get.name;
      this.capital = data.capital.value;
      this.currency = data.get.currency;
      this.area = data.get.area;

    //  this.chosenCountry = data.get.name;
    //  if (this.chosenCountry === 'Hiszpania') {
    //    this.population = Object(countryDetails).details;
    //  } 

    })
  }

}
