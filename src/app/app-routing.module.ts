import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'jerseys', loadChildren: 'app/shop/modules/jerseys/jerseys.module#JerseysModule'},
  {path: 'carts', loadChildren: 'app/shop/modules/carts/carts.module#CartsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
