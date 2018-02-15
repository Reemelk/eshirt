import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'

import { CartService } from './../../../services/cart.service';
import { Jersey } from './../../../interfaces/jersey.interface';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$: Observable<Jersey[]>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart$ = this.cartService.getCart();
  }
}
