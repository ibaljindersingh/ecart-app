import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from 'src/app/models/CartModel';
import { faPlusCircle,faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.sass']
})
export class CheckoutProductComponent implements OnInit {
  @Input('cartModel') cartModel:CartModel;
  faPlusCircle=faPlusCircle;
  faMinusCircle=faMinusCircle;
  
  
  constructor(private cartService:CartService) {
    
    
  }
  
  ngOnInit() {
  }
  
  add(){
    
    this.cartService.addItemToCart(this.cartModel)
    
  }
  
  subtract(){
    
    this.cartService.decreaseItemFromCart(this.cartModel)
  }
  
  onQtyChange(event){
    console.log(event)
    let value=event.target.value;
    if(value!=" ")
    {
      this.cartService.updateItemQty(this.cartModel.id,value);
    }else{

      this.cartService.updateItemQty(this.cartModel.id,0);
    }
   
    
    
  }
  
  removeProduct()
  {
    this.cartService.removeItemFromCart(this.cartModel);
  }
}
