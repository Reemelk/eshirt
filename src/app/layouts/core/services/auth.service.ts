import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { User } from './../interfaces/user.interface';

@Injectable()
export class AuthService {
  private isLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.statusToken());
  private errorHandlerSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  // actions
  public signIn(user: User): void {
    this.http.post<string>('https://reqres.in/api/login', JSON.stringify({user}))
              .subscribe(data => {
                localStorage.setItem('auth_token', JSON.stringify(data['jwt']));
                this.isLoginSubject.next(true);
              });
  }

  public signOut(): void {
    localStorage.removeItem('auth_token');
    this.isLoginSubject.next(false);
  }

  // public
  public getToken(): string {
    return localStorage.getItem('auth_token');
  }

  public incorrectCredentials(): void {
    this.errorHandlerSubject.next(true);
  }

  // streams
  public isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  public statusCredentials(): Observable<boolean> {
    return this.errorHandlerSubject.asObservable();
  }

  // private
  private statusToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
