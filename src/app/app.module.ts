import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TeamsComponent } from './teams/teams.component';
import { TARGComponent } from './targ/targ.component';
import { ArtiSeedEnhancementComponent } from './arti-seed-enhancement/arti-seed-enhancement.component';
import { SubstituteEarthComponent } from './substitute-earth/substitute-earth.component';
import { SunInfoComponent } from './sun-info/sun-info.component';
import { AMCIPlanComponent } from './amci-plan/amci-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TeamsComponent,
    TARGComponent,
    ArtiSeedEnhancementComponent,
    SubstituteEarthComponent,
    SunInfoComponent,
    AMCIPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
