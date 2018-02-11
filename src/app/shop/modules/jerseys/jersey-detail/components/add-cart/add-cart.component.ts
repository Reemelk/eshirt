import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Stock } from './../../../../../interfaces/stock.interface';
import { Jersey } from './../../../../../interfaces/jersey.interface';

@Component({
  selector: 'add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
  addCartForm: FormGroup;
  @Input() jstocks: Stock[];
  @Input() jersey: Jersey;
  @Output() jerseyWithSizeQty = new EventEmitter<Stock>();
  quantities: number = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addCartForm = this.fb.group({
      size: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  addToCart(): void {
    this.jerseyWithSizeQty.emit(this.addCartForm.value);
  }

  setQuantities(stock): void {
    this.addCartForm.controls['quantity'].reset();
    this.quantities = stock.quantity;
  }
}
