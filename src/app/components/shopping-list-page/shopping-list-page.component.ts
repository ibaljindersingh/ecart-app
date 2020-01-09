import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService.Service';
import { UrlConstant } from 'src/app/constants/url-constants';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.sass']
})
export class ShoppingListPageComponent implements OnInit {
  
  sortType:string="high-low"
  priceRange:number=10000;
  searchText:string=""
  itemList:ItemListModel[]=[];
  filteredItemList:ItemListModel[]=[];
  constructor(private httpService:HttpService,
    private commonService:CommonService
    
    ) { }
    
    ngOnInit() {
      this.priceRange=this.commonService.getFilterValue();
      this.sortType=this.commonService.getSortType();
      this.searchText=this.commonService.getSearchText();
      this.getItemListData()
    }
    
    getItemListData(){
      
      this.httpService.getData(UrlConstant.item_list).subscribe((data:ItemListModel[])=>{
        
        this.itemList=data;
        this.itemList.forEach(item=>{
          
          item.selling_price=item.price-((item.price*item.discount)/100)
        })
        this.filteredItemList=[]
        this.filteredItemList=Array.from(this.itemList);
        this.onSearchText(this.searchText)
        
      },error=>{
        
        
      })
    }
    
    onFilterChanged(updatedPriceRange){
      
      this.priceRange=updatedPriceRange;
      this.filteredItemList=this.itemList.filter(item=>item.price>100 && item.price<this.priceRange)
      if(this.filteredItemList!=undefined && this.filteredItemList){
        this.onSortingChanged(this.sortType)
        
      }
    }
    
    onSortingChanged(sortType){
      if(this.filteredItemList!=undefined && this.filteredItemList){
        
        this.sortType=sortType;
        switch(sortType){
          
          case "high-low":
          
          this.filteredItemList.sort((a,b) => {
            
            if(  a.selling_price < b.selling_price)
            {
              return 1
            }else if(  a.selling_price > b.selling_price)
            {
              return -1
            }
            
            return 0;
            
          }
          )
          break;
          
          case "low-high":
          
          this.filteredItemList.sort((a,b) => {
            
            if(  a.selling_price > b.selling_price)
            {
              return 1
            }else if(  a.selling_price < b.selling_price)
            {
              return -1
            }
            
            return 0;
            
          }
          )
          break;
          
          case "discount":
          
          this.filteredItemList.sort((a,b) => {
            
            if(  a.discount < b.discount)
            {
              return 1
            }else if(  a.discount > b.discount)
            {
              return -1
            }
            
            return 0;
            
          }
          )
          break;
        }
      }
    }
    
    
    onSearchText(searchText){
      
      this.searchText=searchText;
      this.commonService.setSearchText(this.searchText)
      this.onFilterChanged(this.priceRange)
      this.filteredItemList=this.filteredItemList.filter(item=>item.name.includes(searchText))
      
    }
    
  }
  