import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './todos/todos.module';
import { FooterComponent } from './components/footer/footer.component';
import { WcagComponent } from './components/wcag/wcag.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent, FooterComponent, WcagComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    AuthModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
