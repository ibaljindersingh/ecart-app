import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShoppingListPageComponent } from './components/shopping-list-page/shopping-list-page.component';


const routes: Routes = [
  
  {
    path: '',
    component: ShoppingListPageComponent 
  }, {
    path: 'checkout',
    component:  CheckoutComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
