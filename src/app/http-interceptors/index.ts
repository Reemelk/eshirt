import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SetJwtTokenInterceptor } from './set-jwt-token.interceptor';
import { LoginInterceptor } from './login.interceptor';

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: SetJwtTokenInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true},
];
