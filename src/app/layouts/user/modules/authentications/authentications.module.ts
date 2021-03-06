import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationsRoutingModule } from './authentications-routing.module';
import { AuthenticationMaterialModule } from './authentication-material.module';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [CommonModule, AuthenticationsRoutingModule, ReactiveFormsModule, AuthenticationMaterialModule],
  declarations: [SigninComponent, SignupComponent]
})
export class AuthenticationsModule {}
