import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from '../services/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import { ClockComponent } from './clock/clock.component';
import { SelectionComponent } from './selection/selection.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule
  ],
  declarations: [ProfileComponent, ProfileBarComponent, ClockComponent, SelectionComponent],
  exports: [ProfileComponent, ProfileBarComponent, ClockComponent, SelectionComponent],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
