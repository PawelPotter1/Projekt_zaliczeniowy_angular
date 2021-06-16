import { Component, OnInit } from '@angular/core';
import { CountryDataService} from '../../services/country-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { countryDetails } from '../data-country/data';

@Component({
  selector: 'app-recomented-countries',
  templateUrl: './recomented-countries.component.html',
  styleUrls: ['./recomented-countries.component.scss']
})
export class RecomentedCountriesComponent implements OnInit {

  constructor(private countryData: CountryDataService, private router:Router) { 

  }

  ngOnInit(): void {
  }

chosenCountry: any;
buttonValue: string;

toCountryDetails(country) {
  this.countryData.chosenCountry = country;
  
  this.router.navigate(["/country"],
      {queryParams:
        {
        name: country,
        capital: country.capital,
        lang: country.language
        }
      })
  } 

}
