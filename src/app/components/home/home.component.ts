import { Component, OnInit } from '@angular/core';
import { WeatherdataService} from '../../services/weatherdata.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data; 
  constructor(private weatherService:WeatherdataService) { }

  ngOnInit(): void {

    }
  
}
