import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Jersey } from './../interfaces/jersey.interface';

@Injectable()
export class CartService {
  private cartJerseysSubject: BehaviorSubject<Jersey[]> = new BehaviorSubject([]);
  private cartJerseys: Jersey[] = [];

  public addToCart(j: Jersey): void {
    this.cartJerseys.push(j);
    console.log(this.cartJerseys);
    // push to the stream
    this.cartJerseysSubject.next(this.cartJerseys);
  }

  public getCart(): Observable<Jersey[]> {
    return this.cartJerseysSubject.asObservable();
  }
}
