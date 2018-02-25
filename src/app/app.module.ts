import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CartService } from './../app/layouts/core/services/cart.service';
import { JerseyService } from './../app/layouts/core/services/jersey.service';
import { PaymentService } from './../app/layouts/core/services/payment.service';
import { StorageService } from './../app/layouts/core/services/storage.service';
import { AuthService } from './../app/layouts/core/services/auth.service';
import { RegisterService } from './../app/layouts/core/services/register.service';

import { GraphqlModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, GraphqlModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, FlexLayoutModule,
  ],
  providers: [
    CartService, JerseyService, StorageService, PaymentService, AuthService,
    RegisterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
