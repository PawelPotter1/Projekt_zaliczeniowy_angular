import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { LoginComponent } from './auth/login.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { TodosComponent } from './todos/todos.component';

const routes:Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'Todo', component: TodosComponent},
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
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
