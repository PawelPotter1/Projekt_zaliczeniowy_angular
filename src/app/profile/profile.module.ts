import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from '../services/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    HttpClientJsonpModule
  ],
  declarations: [ProfileComponent, ProfileBarComponent, ClockComponent],
  exports: [ProfileComponent, ProfileBarComponent, ClockComponent],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
