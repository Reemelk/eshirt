import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Jersey } from './../../../../interfaces/jersey.interface';
import { Stock } from './../../../../interfaces/stock.interface';

import { JerseyService } from './../../../../services/jersey.service';
import { CartService } from './../../../../services/cart.service';

@Component({
  selector: 'jersey-detail',
  templateUrl: './jersey-detail.component.html',
  host: {'class': 'columns'},
  styleUrls: ['./jersey-detail.component.css']
})
export class JerseyDetailComponent implements OnInit {
  private param: string;
  jersey: Jersey;
  jstocks: Stock[];

  constructor(private route: ActivatedRoute, private jerseyService: JerseyService, private cartService: CartService) {
    this.param = this.route.snapshot.params.friendly_url;
  }

  ngOnInit() {
    this.jersey = this.jerseyService.getJersey(this.param);
    this.jstocks = [{size: 'S', quantity: 12}, {size: 'L', quantity: 2}, {size: 'XL', quantity: 5}];
  }

  addToCart(s: Stock): void {
    this.jersey.size = s.size;
    this.jersey.quantity = s.quantity;
    this.cartService.addToCart(this.jersey);
  }
}
