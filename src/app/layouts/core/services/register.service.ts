import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';

import { User } from './../interfaces/user.interface';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) {}

  public signUp(user: User): void {
  }
}
