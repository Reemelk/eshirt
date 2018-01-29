import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JerseyListComponent } from './jersey-list/jersey-list.component';
import { JerseyTeamComponent } from './jersey-team/jersey-team.component';
import { JerseyDetailsComponent } from './jersey-details/jersey-details.component';

const routes: Routes = [
  {path: '', component: JerseyListComponent},
  {path: ':team/all', component: JerseyTeamComponent},
  {path: ':terms', component: JerseyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JerseysRoutingModule { }
