import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtiSeedEnhancementComponent } from './arti-seed-enhancement/arti-seed-enhancement.component';

// adding components
import { LandingComponent } from './landing/landing.component';
import { SubstituteEarthComponent } from './substitute-earth/substitute-earth.component';
import { SunInfoComponent } from './sun-info/sun-info.component';
import { TARGComponent } from './targ/targ.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path:'conqueror-space',component:LandingComponent},
  {path:'open-space',component:TeamsComponent},
  {path:'conqueror-space/the-advanced-robotics-generation',component: TARGComponent},
  {path:'conqueror-space/artificial-seed-enhancement',component: ArtiSeedEnhancementComponent},
  {path:'conqueror-space/agi-4',component: SubstituteEarthComponent},
  {path:'conqueror-space/the-sun',component: SunInfoComponent},
  {path: '', redirectTo: 'conqueror-space', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
