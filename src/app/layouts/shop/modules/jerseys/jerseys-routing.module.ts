import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JerseyListComponent } from './jersey-list/containers/jersey-list.component';
import { JerseyDetailComponent } from './jersey-detail/containers/jersey-detail.component';

const routes: Routes = [
  {path: '', component: JerseyListComponent},
  {path: ':friendly_url', component: JerseyDetailComponent},
  //{path: 'teamname/:teamname', component: JerseyTeamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JerseysRoutingModule { }
