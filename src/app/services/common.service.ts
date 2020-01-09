import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  sortType:string="high-low"
  filterValue:number=10000;
  searchText:string=""
  constructor() { }
  
  getSortType()
  {
    return this.sortType;
  }
  setSortType(sortType){
    
    this.sortType=sortType
  }

  getSearchText()
  {
    return this.searchText;
  }
  setSearchText(searchText){
    
    this.searchText=searchText
  }
  getFilterValue()
  {
    return this.filterValue;
  }
  setFilterValue(filterValue){
    
    this.filterValue=filterValue
  }
}
