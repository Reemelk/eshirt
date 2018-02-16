import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { User } from './../interfaces/user.interface';

@Injectable()
export class AuthService {
  private isLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getToken());

  public signIn(user: User): void {
  }

  public isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  private getToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
