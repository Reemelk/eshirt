import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CartService } from './../../../services/cart.service';
import { Jersey } from './../../../interfaces/jersey.interface';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalPrice$: Observable<number>

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.totalPrice$ = this.cartService.getTotalPrice();
  }

  public removeFromCart(jerseyToRemove: Jersey): void {
    this.cartService.removeToCart(jerseyToRemove);
  }
}
