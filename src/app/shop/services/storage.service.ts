import { Injectable } from '@angular/core';

import { Jersey } from './../interfaces/jersey.interface';

@Injectable()
export class StorageService {

  constructor() {
    this.setStorage();
  }

  public getCartStorage(): Jersey[]{
    return JSON.parse(localStorage.getItem('cart'));
  }

  public pushToCartStorage(ar: Jersey[]): void {
    localStorage.setItem('cart', JSON.stringify(ar));
  }

  private setStorage(): void {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.getItem('cart') === null) {
        let array: any[] = [];
        localStorage.setItem('cart', JSON.stringify(array));
      }
    } else {
      console.log('need a db cart handler');
    }
  }
}
