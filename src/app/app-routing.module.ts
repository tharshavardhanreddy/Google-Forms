import { CandidateformComponent } from './candidateform/candidateform.component';
import { RequirementsformComponent } from './requirementsform/requirementsform.component';
import { DailylogComponent } from './dailylog/dailylog.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'' ,component:DailylogComponent},
  {path:'dailylog', component:DailylogComponent},
  {path:'requirementform',component:RequirementsformComponent},
  {path:'candidateform',component:CandidateformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
