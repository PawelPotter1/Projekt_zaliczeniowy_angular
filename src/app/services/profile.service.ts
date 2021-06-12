import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../profile/models/user';
import { filter, map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class ProfileService {

  api_url = 'http://localhost:3000/users/'

  private user_request: Observable<User>

  getUserProfile() {

    if (!this.user_request) {
      this.user_request = this.auth.state
        .pipe(
          filter(() => this.auth.isAuthenticated),
          map(() => this.auth.getCurrentUser()),
      )
    }

    return this.user_request
  }

  clearCache() {
    this.user_request = null
  }

  constructor(private http: HttpClient, private auth: AuthService) {

    // setInterval(()=>{
    //   this.clearCache()
    // },5000)
  }

}
