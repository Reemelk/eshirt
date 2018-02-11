import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Jersey } from './../interfaces/jersey.interface';

import { JERSEYS } from './../modules/jerseys/mock-jerseys';

@Injectable()
export class JerseyService {

  getJerseys(): Observable<Jersey[]> {
    return of(JERSEYS);
  }

  getJersey(frd_url: string): Jersey {
    return JERSEYS[0];
  }
}
