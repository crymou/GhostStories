import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { WakeUpComponent } from './components/wake-up/wake-up.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LandingComponent,
    WakeUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
