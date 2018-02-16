import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { JerseysRoutingModule } from './jerseys-routing.module';
import { JerseyMaterialModule } from './jersey-material.module';

import { JerseyListComponent } from './jersey-list/containers/jersey-list.component';
import { JerseyCardComponent } from './jersey-list/components/jersey-card/jersey-card.component';

import { JerseyDetailComponent } from './jersey-detail/containers/jersey-detail.component';
import { AddCartComponent } from './jersey-detail/components/add-cart/add-cart.component';
import { JerseyFeatureComponent } from './jersey-detail/components/jersey-feature/jersey-feature.component';

@NgModule({
  imports: [CommonModule, JerseysRoutingModule, JerseyMaterialModule, ReactiveFormsModule],
  declarations: [
    JerseyListComponent, JerseyCardComponent,
    JerseyDetailComponent, AddCartComponent, JerseyFeatureComponent,
  ]
})
export class JerseysModule { }
