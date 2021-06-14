import { Component, OnInit } from '@angular/core';
import {CountryDataService} from '../../services/country-data.service';
import { ActivatedRoute} from '@angular/router';
import { data } from './data'

@Component({
  selector: 'app-data-country',
  templateUrl: './data-country.component.html',
  styleUrls: ['./data-country.component.scss']
})
export class DataCountryComponent implements OnInit {

  constructor(private countryData: CountryDataService, private activateRoute: ActivatedRoute ) { 

  }

  chosenCountry;
  population;

  ngOnInit(): void {
    this.activateRoute.queryParamMap.subscribe(val => {

      for (let i=0;i<data.length; i++) {
        console.log(data[i])
      }

    this.chosenCountry = val.get.name;
    if (this.chosenCountry === 'Hiszpania') {
      this.population = Object(data).details;
    } 

    })
  }

}