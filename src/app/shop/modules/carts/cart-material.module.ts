import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatListModule],
  exports: [MatListModule]
})
export class CartMaterialModule { }
