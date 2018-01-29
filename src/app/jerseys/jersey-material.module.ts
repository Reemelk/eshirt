import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatFormFieldModule],
  exports: [MatCardModule, MatButtonModule, MatDividerModule, MatFormFieldModule],
})
export class JerseyMaterialModule { }
