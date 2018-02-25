import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Jersey } from './../../../../../core/interfaces/jersey.interface';
import { Stock } from '../../../../../core/interfaces/stock.interface';

import { JerseyService } from './../../../../../core/services/jersey.service';
import { CartService } from './../../../../../core/services/cart.service';

@Component({
  selector: 'jersey-detail',
  templateUrl: './jersey-detail.component.html',
  host: {'class': 'columns'},
  styleUrls: ['./jersey-detail.component.css']
})
export class JerseyDetailComponent implements OnInit {
  private param: string;
  jersey: Jersey

  constructor(private route: ActivatedRoute, private jerseyService: JerseyService, private cartService: CartService) {
    this.param = this.route.snapshot.params.friendly_url;
  }

  ngOnInit() {
    this.jersey = this.jerseyService.getJersey(this.param);
  }

  addToCart(s: Stock): void {
    this.jersey.stocks.push(s);
    this.cartService.addToCart(this.jersey);
  }
}