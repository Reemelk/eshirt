import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';
import { CartMaterialModule } from './cart-material.module';

import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';

@NgModule({
  imports: [CommonModule, CartsRoutingModule, CartMaterialModule],
  declarations: [CartComponent, CartListComponent, CheckoutComponent]
})
export class CartsModule { }