import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileMaterialModule } from './profile-material.module';

import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [CommonModule, ProfilesRoutingModule],
  declarations: [
    OrdersComponent,
    ProfileComponent,
  ]
})
export class ProfilesModule { }
