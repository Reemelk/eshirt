import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CartService } from './../app/shop/services/cart.service';
import { JerseyService } from './../app/shop/services/jersey.service';
import { PaymentService } from './../app/shop/services/payment.service';
import { StorageService } from './../app/shop/services/storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, FlexLayoutModule],
  providers: [
    CartService, JerseyService, StorageService, PaymentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
