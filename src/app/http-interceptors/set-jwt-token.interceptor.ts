import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../layouts/user/services/auth.service';

@Injectable()
export class SetJwtTokenInterceptor implements HttpInterceptor {
  private token: string | 'GUEST';

  constructor(private authService: AuthService) {
    this.token = this.authService.getToken();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestWithJWT = req.clone({headers: req.headers.set('Authorization', `Bearer ${this.token}`)});
    return next.handle(requestWithJWT);
  }
}
