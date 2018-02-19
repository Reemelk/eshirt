import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/reduce';

import { Jersey } from './../interfaces/jersey.interface';
import { StorageService } from './storage.service';

@Injectable()
export class CartService {
  private cartJerseysSubject: BehaviorSubject<Jersey[]> = new BehaviorSubject([]);

  constructor(private storageService: StorageService) {
    this.cartJerseysSubject.next(this.storageService.getCartStorage());
  }

  public addToCart(j: Jersey): void {
    this.addItemToCart(j);
  }

  public removeToCart(j: Jersey): void {
    this.removeItemFromCart(j);
  }

  public getCart(): Observable<Jersey[]> {
    return this.cartJerseysSubject.asObservable().share();
  }

  public getTotalPrice(): Observable<number> {
    return this.cartJerseysSubject.map((jerseys: Jersey[]) => {
      return jerseys.reduce((prev, curr) => (curr.quantity * curr.price) + prev, 0);  
    });
  }

  private addItemToCart(new_item: Jersey): void {
    let items = this.storageService.getCartStorage();
    let item = items.find(x => x.reference === new_item.reference && x.size === new_item.size);
    if (item) {
      const index_item = items.findIndex(x => x.reference === item.reference && x.size === item.size)
      item.quantity += new_item.quantity;
      items.splice(index_item, 1, item);
    } else {
      items.push(new_item);
    }
    this.storageService.pushToCartStorage(items);
    this.cartJerseysSubject.next(items);
  }

  private removeItemFromCart(j: Jersey): void {
    let items = this.storageService.getCartStorage();
    const index_item = items.findIndex(x => x.reference === j.reference && x.size === j.size);
    items.splice(index_item, 1);
    this.storageService.pushToCartStorage(items);
    this.cartJerseysSubject.next(items);
  }
}
