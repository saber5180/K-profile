import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KProfileComponent } from './k-profile/k-profile.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: KProfileComponent },
  { path: 'competencies', component: CompetenciesComponent },
  { path: 'cv', component: CvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }