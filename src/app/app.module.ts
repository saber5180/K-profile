import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { KProfileComponent } from './k-profile/k-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CvComponent } from './cv/cv.component';
import { ProfileComponent } from './profile/profile.component';
import { FormationsComponent } from './formation/formation.component';

  @NgModule({
    declarations: [
      AppComponent,
     
      KProfileComponent,
      CvComponent,
      ProfileComponent,
      FormationsComponent
      
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


