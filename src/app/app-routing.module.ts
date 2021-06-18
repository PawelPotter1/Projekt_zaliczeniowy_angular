import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { LoginComponent } from './auth/login.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { TodosComponent } from './todos/todos.component';
import { SearchflightComponent } from './components/searchflight/searchflight.component';
import { RecomentedCountriesComponent } from './components/recomented-countries/recomented-countries.component';
import { TripComponent } from './components/trip/trip.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SimpleloginComponent } from './simplelogin/simplelogin.component';
import { DataCountryComponent } from './components/data-country/data-country.component';
import { RegistrationComponent } from './auth/registration.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes:Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'simplelogin', component: SimpleloginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'opinie', component: TodosComponent},
  {path: 'searchflight', component: SearchflightComponent},
  {path: 'country', component: RecomentedCountriesComponent},
  {path: 'countrydetail',component: DataCountryComponent},
  {path: 'trip', component: TripComponent},
  {path: 'pogoda', component: WeatherComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: '**', redirectTo: 'not-found', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes,{
      enableTracing: true,
      // errorHandler:()=>{},
      // initialNavigation:true,
      // onSameUrlNavigation:'reload',
      //useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
