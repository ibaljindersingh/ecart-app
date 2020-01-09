import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.sass']
})
export class CartIconComponent implements OnInit {
  faShoppingCart=faShoppingCart;
  cartCount:number=0;
  constructor(private cartService:CartService) { }
  
  ngOnInit() {
    
    
    this.cartCount=this.cartService.getCartList().length;
    
    this.cartService.getCartListObserver().subscribe(data=>{
      
      this.cartCount=data.length;
      
    })
    
  }
  
}
