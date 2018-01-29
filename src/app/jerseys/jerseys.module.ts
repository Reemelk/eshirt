import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JerseysRoutingModule } from './jerseys-routing.module';
import { JerseyMaterialModule } from './jersey-material.module';

import { JerseyListComponent } from './jersey-list/jersey-list.component';
import { JerseyCardComponent } from './jersey-list/jersey-card/jersey-card.component';
import { JerseyNavComponent } from './jersey-list/jersey-nav/jersey-nav.component';

import { JerseyDetailsComponent } from './jersey-details/jersey-details.component';
import { AddCartComponent } from './jersey-details/add-cart/add-cart.component';
import { JerseyFeatureComponent } from './jersey-details/jersey-feature/jersey-feature.component';

import { JerseyTeamComponent } from './jersey-team/jersey-team.component';

@NgModule({
  imports: [CommonModule, JerseysRoutingModule, JerseyMaterialModule],
  declarations: [
    JerseyListComponent, JerseyCardComponent, JerseyNavComponent,
    JerseyDetailsComponent, AddCartComponent, JerseyFeatureComponent,
    JerseyTeamComponent
  ]
})
export class JerseysModule { }
