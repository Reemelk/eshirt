import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'users', loadChildren: 'app/users/users.module#UsersModule'},
  {path: 'accounts', loadChildren: 'app/accounts/accounts.module#AccountsModule'},
  {path: 'jerseys', loadChildren: 'app/jerseys/jerseys.module#JerseysModule'},
  {path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule'},
  {path: 'cart', loadChildren: 'app/carts/carts.module#CartsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
