import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

import { Jersey } from './../../../../interfaces/jersey.interface';
import { CartService } from './../../../../services/cart.service';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent {
  dataSource: DataSource<any> = new CartDataSource(this.cartService);
  displayedColumns: String[] = ['teamname', 'type', 'size', 'quantity', 'price', 'actions'];
  @Output() removeJerseyCart = new EventEmitter<Jersey>();

  constructor(private cartService: CartService) {}

  public removeCart(jersey: Jersey): void {
    this.removeJerseyCart.emit(jersey);
  }
}

// Material2 datatable
export class CartDataSource extends DataSource<any> {

  constructor(private cartService: CartService) {
    super();
  }

  connect(): Observable<Jersey[]> {
    return this.cartService.getCart();
  }

  disconnect() {}
}
