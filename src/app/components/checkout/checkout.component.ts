import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/CartModel';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  
  private checkoutItemList:CartModel[]=[]
  filteredItemList:CartModel[];

  
  constructor(private cartService:CartService,
    private router:Router) { }
    
    ngOnInit() {
      this.cartService.getCartListObserver().subscribe(data=>{
        
        this.checkoutItemList=data;
        this.filteredItemList=[]
        this.filteredItemList=Array.from(this.checkoutItemList);
      })
      this.getCartList()
    }
    
    getCartList(){
      
      
      
      if(this.cartService.getCartList()){
        this.checkoutItemList=this.cartService.getCartList();
        console.log(this.checkoutItemList)
        if(!this.checkoutItemList){
          this.checkoutItemList=[]
        }

        this.filteredItemList=[]
        this.filteredItemList=Array.from(this.checkoutItemList);

      }
    }
    
    getTotalAmount(type){
      
      let itemTotal=0;
      let discount=0;
      let payable=0;
      
      this.checkoutItemList.forEach(item=>{
        
        itemTotal=itemTotal+(item.price*item.quantity);
        discount=discount+((item.price*item.discount)/100);
        payable=payable+(item.selling_price*item.quantity)
        
      })
      
      if(type=="Price")
      {
        return itemTotal
      }else if(type=="Discount")
      {
        return discount
      }else{
        return payable;
      }
      
    }
    
    navigateToHome(){
      
      this.router.navigateByUrl("/");
    }

    onSearchText(searchText){

      this.filteredItemList=this.checkoutItemList.filter(item=>item.name.includes(searchText))
  
    }
  }
  