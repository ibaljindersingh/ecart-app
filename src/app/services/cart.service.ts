import { Injectable } from '@angular/core';
import { CartModel } from '../models/CartModel';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartList:CartModel[]=[];
  cartListSubject: Subject<CartModel[]> = new Subject();
  
  constructor() { }
  
  
 public addItemToCart(item:any){
    
    let index= this.cartList.findIndex(cartItem=>cartItem.id==item.id)
    if(index!=-1){
      let cartListItem=this.cartList[index];
      cartListItem.quantity++;
    }else{
      let newCartItem:CartModel=new CartModel()
      newCartItem.id=item.id
      newCartItem.name=item.name
      newCartItem.price=item.price
      newCartItem.quantity=1
      newCartItem.category=item.category
      newCartItem.discount=item.discount
      newCartItem.img_url=item.img_url
      newCartItem.selling_price=item.selling_price

      this.cartList.push(newCartItem);
    }
    
    this.cartListSubject.next(this.cartList)
  }

  public decreaseItemFromCart(item:any){
    
    let index= this.cartList.findIndex(cartItem=>cartItem.id==item.id)
    if(index!=-1){
      let cartListItem=this.cartList[index];
      cartListItem.quantity--;
      if(cartListItem.quantity==0){
        this.cartList.splice(index,1);
      }
    }
    
    this.cartListSubject.next(this.cartList)
  }

  public updateItemQty(itemId,qty){

    let index= this.cartList.findIndex(cartItem=>cartItem.id==itemId)
    if(index!=-1){     
   
        this.cartList[index].quantity=qty
      
    }
    
    this.cartListSubject.next(this.cartList)
  }

  public removeItemFromCart(item:ItemListModel){
    
    let index= this.cartList.findIndex(cartItem=>cartItem.id==item.id)
    if(index!=-1){     
   
        this.cartList.splice(index,1);
      
    }
    
    this.cartListSubject.next(this.cartList)
  }

  public getCartListObserver():Observable<CartModel[]>{

   return this.cartListSubject.asObservable();
  }

 public getCartList():CartModel[]{
    return this.cartList;
  }
  
  
  
}
