import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { SortComponent } from './components/sort/sort.component';
import { FilterComponent } from './components/filter/filter.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShoppingListPageComponent } from './components/shopping-list-page/shopping-list-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpService } from './services/HttpService.Service';
import { ItemComponent } from './components/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutProductComponent } from './components/checkout-product/checkout-product.component'; 
import { CartService } from './services/cart.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CartIconComponent,
    SortComponent,
    FilterComponent,
    ShoppingListComponent,
    HeaderComponent,
    CheckoutComponent,
    ShoppingListPageComponent,
    FooterComponent,
    ItemComponent,
    CheckoutProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [HttpService,CartService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
