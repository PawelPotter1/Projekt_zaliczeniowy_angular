import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegistrationComponent],
  providers: [AuthService],
  exports: [LoginComponent, RegistrationComponent]
})
export class AuthModule { }
