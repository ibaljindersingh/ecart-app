import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSort,faFilter } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.sass']
})
export class SortComponent implements OnInit {
  faSort=faSort;
  faFilter=faFilter;
  @Output() onSortingChanged = new EventEmitter<any>();
  @Output() applyFilter = new EventEmitter<any>();
  
  
  sortModal:GlobalEventHandlers
  filterModal:GlobalEventHandlers
  sortType: any;
  
  constructor(private commonService:CommonService) { }
  
  ngOnInit() {
    
    this.initSortType()
  }
  initSortType() {
    this.sortType=this.commonService.sortType;
    this.onSortingChanged.emit(this.sortType);
  }
  
  updateSort(evt, sortType) {
    this.sortType=sortType;
    var i,tablinks;
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
    
    this.onSortingChanged.emit(sortType);
    
    this.commonService.setSortType(sortType)
    
  }
  
  updateSortRadio(evt, sortType){
    this.sortType=sortType
  }
  
  applySort(){
    this.onSortingChanged.emit(this.sortType);
    this.commonService.setSortType(this.sortType)
    this.sortModal.style.display = "none";
  }
  
  dismissSortPopup(){
    this.sortModal.style.display = "none";
  }
  
  openSortPopUp(){
    this.sortModal = document.getElementById("sort-modal");      
    this.sortModal.style.display = "block";
    window.onclick = function(event) {
      if (event.target == this.sortModal) {
        this.sortModal.style.display = "none";
      }
    }
  }
  
  openfilters(){
    
    this.filterModal = document.getElementById("filter-modal");    
    this.filterModal.style.display = "block";
    window.onclick = function(event) {
      if (event.target == this.filterModal) {
        this.filterModal.style.display = "none";
      }
    }
  }
  
  onFilterChanged(event){
    
    this.applyFilter.emit(event);
    this.filterModal.style.display = "none";
  }
}
