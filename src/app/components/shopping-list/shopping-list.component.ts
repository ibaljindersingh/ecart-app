import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService.Service';
import { UrlConstant } from 'src/app/constants/url-constants';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
  
  @Input('itemList') itemList: ItemListModel[];  
  constructor(private cartService:CartService) { }
  
  ngOnInit() {
  }
  
  
  onAddToCart(itemModel:ItemListModel){
    
    this.cartService.addItemToCart(itemModel);
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    
  }
}
