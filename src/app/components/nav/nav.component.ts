import { Component, OnInit } from '@angular/core';
import { ClockComponent} from '../../profile/clock/clock.component'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  tab = '';

  constructor() { }

  ngOnInit(): void {
  }

}
