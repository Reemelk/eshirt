import { Component, OnInit, Input } from '@angular/core';

import { Jersey } from './../../../../interfaces/jersey.interface';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Input() cart: Jersey[];

  constructor() { }

  ngOnInit() {
  }

}
