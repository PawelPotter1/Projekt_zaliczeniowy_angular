import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.components.html',
  styleUrls: ['./login.components.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username:[''],
    password:['']
  })
  message: string;

  constructor(private fb:FormBuilder,
            private auth:AuthService) { }

  login(){
    this.auth.login(this.loginForm.value)
  }

  ngOnInit() {
    this.message = this.auth.getMessage()
  }

}
