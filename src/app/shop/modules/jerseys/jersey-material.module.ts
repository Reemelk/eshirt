import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    MatCardModule, MatButtonModule, MatDividerModule, MatFormFieldModule,MatInputModule,
    MatSelectModule,
  ],
  exports: [
    MatCardModule, MatButtonModule, MatDividerModule, MatFormFieldModule,MatInputModule,
    MatSelectModule,
  ],
})
export class JerseyMaterialModule { }
