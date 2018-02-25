import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Apollo } from 'apollo-angular';

import { Jersey } from './../interfaces/jersey.interface';
import { AllJerseys, JerseyDetails } from './../graphql/queries/shop';

@Injectable()
export class JerseyService {
  constructor(private apollo:Apollo) {}

  public getJerseys(): Observable<any> {
    return this.apollo.watchQuery({ query: AllJerseys }).valueChanges;
  }

  // check if better approach
  public getJersey(fdly_url: string): Jersey {
    let j: Jersey;
    this.apollo.watchQuery<{jersey: Jersey}>({
      query: JerseyDetails, 
      variables: { friendly_url: fdly_url}
    }).valueChanges.subscribe(result => {
      j = result.data.jersey;
    });
    return j;
  }
}
