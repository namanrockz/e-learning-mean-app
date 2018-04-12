import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const rt: Routes = [
  {path:'signup',component: SignupComponent },
  {path:'signin',component: SigninComponent },
  {path:'home',component: HomeComponent },
  {path:'courses',component: CoursesComponent },
  {path:'',redirectTo: '/home',pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rt)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
