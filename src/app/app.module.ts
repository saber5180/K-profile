import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { KProfileComponent } from './k-profile/k-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CvComponent } from './cv/cv.component';
import { ProfileComponent } from './profile/profile.component';

  @NgModule({
    declarations: [
      AppComponent,
      CompetenciesComponent,
      KProfileComponent,
      CvComponent,
      ProfileComponent
      
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


