import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './todos/todos.module';
import { FooterComponent } from './components/footer/footer.component';
//import { WcagComponent } from './components/wcag/wcag.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http'
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherdataService } from './services/weatherdata.service';
import { DataCountryComponent } from './components/data-country/data-country.component'
import { SearchflightComponent } from './components/searchflight/searchflight.component'
import { RecomentedCountriesComponent } from './components/recomented-countries/recomented-countries.component';
import { TripComponent } from './components/trip/trip.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleloginComponent } from './components/simplelogin/simplelogin.component';

@NgModule({
  declarations: [
    AppComponent, 
    FooterComponent, 
    //WcagComponent, 
    HomeComponent, 
    NavComponent, WeatherComponent,
    DataCountryComponent, SearchflightComponent, RecomentedCountriesComponent,
    TripComponent,
    SimpleloginComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    AuthModule,
    TodosModule,
    FormsModule, HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [WeatherdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
