import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{

  tab = '';

  // constructor() { }

  ngOnInit(): void {
  }

  constructor(public auth:AuthService) {
    this.auth.state.subscribe(
      authorized => this.tab = authorized? 'profile' : 'login')
}

}
