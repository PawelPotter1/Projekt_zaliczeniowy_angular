import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { User } from '../models/user';
import { WeatherdataService } from 'src/app/services/weatherdata.service';

@Component({
  selector: 'profile-bar',
  templateUrl: './profile-bar.component.html',
  styleUrls: ['./profile-bar.component.css']
})
export class ProfileBarComponent implements OnInit {

  constructor(private profileService:ProfileService, 
              protected auth:AuthService,
              private weatherdataService: WeatherdataService) { }


  profile:User;
  myDate: Date;

  ngOnInit() {
    this.profileService.getUserProfile()
    .subscribe(user =>{
      this.profile = user
    })

  }


}
