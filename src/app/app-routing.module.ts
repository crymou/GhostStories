import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from 'src/app/components/landing/landing.component';
import { StartPageComponent } from '../app/components/start-page/start-page.component';
import { WakeUpComponent } from '../app/components/wake-up/wake-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'start', component: StartPageComponent },
  { path: 'wake', component: WakeUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
