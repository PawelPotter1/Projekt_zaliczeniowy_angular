import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' 

import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './todos/todos.module';
import { FooterComponent } from './components/footer/footer.component';
import { WcagComponent } from './components/wcag/wcag.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './components/weather/weather.component';
import { RouterModule } from '@angular/router';
import { allAppRoutes } from './routes'

@NgModule({
  declarations: [
    AppComponent, 
    FooterComponent, 
    WcagComponent, 
    HomeComponent, 
    NavComponent, WeatherComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    AuthModule,
    TodosModule,
    FormsModule, HttpClientModule, RouterModule.forRoot(allAppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
