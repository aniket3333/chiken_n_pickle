import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'choose-location', pathMatch: 'full' },
  { path: 'choose-location', loadChildren: () => import('./city/city.module').then(m => m.CityModule) },
  // { path: 'sports-events', loadChildren: () => import('./sports-events/sports-events.module').then(m => m.SportsEventsModule) },
  // { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  // { path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: '**', redirectTo: 'choose-location' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
