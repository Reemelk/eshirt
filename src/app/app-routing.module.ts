import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'jerseys', loadChildren: 'app/layouts/shop/modules/jerseys/jerseys.module#JerseysModule'},
  {path: 'carts', loadChildren: 'app/layouts/shop/modules/carts/carts.module#CartsModule'},
  {path: 'users', loadChildren: 'app/layouts/user/modules/authentications/authentications.module#AuthenticationsModule'},
  {path: 'account', loadChildren: 'app/layouts/user/modules/profiles/profiles.module#ProfilesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
