import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Jersey } from './jersey.model';

import { JERSEYS } from './mock-jerseys';
import { CATEGORIES } from './mock-teamnames';

@Injectable()
export class JerseyService {

  getJerseys(): Observable<Jersey[]> {
    return of(JERSEYS);
  }

  getJersey(friendly_url: string): Observable<Jersey> {
    return of(JERSEYS[0]);
  }

  getMostSoldJerseys(): Observable<String[]> {
    return of(CATEGORIES);
  }
}
