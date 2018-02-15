import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'jerseys', loadChildren: 'app/shop/modules/jerseys/jerseys.module#JerseysModule'},
  {path: 'carts', loadChildren: 'app/shop/modules/carts/carts.module#CartsModule'},
  {path: 'users', loadChildren: 'app/user/modules/authentications/authentications.module#AuthenticationsModule'},
  {path: 'account', loadChildren: 'app/user/modules/profiles/profiles.module#ProfilesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
