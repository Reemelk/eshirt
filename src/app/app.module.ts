import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CartService } from './../app/layouts/shop/services/cart.service';
import { JerseyService } from './../app/layouts/shop/services/jersey.service';
import { PaymentService } from './../app/layouts/shop/services/payment.service';
import { StorageService } from './../app/layouts/shop/services/storage.service';
import { AuthService } from './../app/layouts/user/services/auth.service';
import { RegisterService } from './../app/layouts/user/services/register.service';

import { httpInterceptorProviders } from './http-interceptors/index';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, FlexLayoutModule,
    ApolloModule, HttpLinkModule,
  ],
  providers: [
    httpInterceptorProviders, CartService, JerseyService, StorageService, PaymentService, AuthService,
    RegisterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({uri: 'https//api.com/graphql'}),
      cache: new InMemoryCache()
    });
  }
}
