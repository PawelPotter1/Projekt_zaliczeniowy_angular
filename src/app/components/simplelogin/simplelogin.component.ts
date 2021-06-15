import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from './users';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrls: ['./simplelogin.component.css']
})
export class SimpleloginComponent implements OnInit {
  @Input () name: string;
  constructor(private router: Router) { }

  public userVerify = ''

  ngOnInit(): void {
  }

vlogin(form:NgForm){
    console.log(form.value)
    console.log(form.valid)
}

logon(login,password){

  for (let i=0;i<users.length;i++){
     if (users[i].login == login.value.toLowerCase() && users[i].password == password.value){
       this.userVerify = "poprawnie zalogowano"
       this.router.navigate(['/trip']);
       break;
     }
    else{
      this.userVerify = "Podano niepoprawne dane użytkonika lub hasła"
     }
    }
  }



}
