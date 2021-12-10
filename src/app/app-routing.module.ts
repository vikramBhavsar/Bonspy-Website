import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// adding components
import { LandingComponent } from './landing/landing.component';
import { TARGComponent } from './targ/targ.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path:'conqueror-space',component:LandingComponent},
  // {path:'/conqueror-space',component:LandingComponent},
  // // {path:'/conqueror-space',component:LandingComponent},
  {path:'open-space',component:TeamsComponent},
  {path:'conqueror-space/the-advanced-robotics-generation',component: TARGComponent},
  {path: '', redirectTo: 'conqueror-space', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
