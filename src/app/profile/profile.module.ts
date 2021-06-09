import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from '../services/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ProfileComponent, ProfileBarComponent],
  exports: [ProfileComponent, ProfileBarComponent],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
