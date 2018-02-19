import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../layouts/user/services/auth.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).catch((error: any) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 400) {
          this.authService.incorrectCredentials();
        }
      }
      return Observable.throw(error);
    });
  }
}
