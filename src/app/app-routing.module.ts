import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KProfileComponent } from './k-profile/k-profile.component';

import { CvComponent } from './cv/cv.component';
import { FormationsComponent } from './formation/formation.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: KProfileComponent },
  { path: 'formation', component: FormationsComponent },
  { path: 'cv', component: CvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }