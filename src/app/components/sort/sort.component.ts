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
    var sortModal = document.getElementById("sort-modal");      
    sortModal.style.display = "none";
  }
  
  dismissSortPopup(){
    var sortModal = document.getElementById("sort-modal");      
    sortModal.style.display = "none";
  }
  
  openSortPopUp(){
    var sortModal = document.getElementById("sort-modal");      
    sortModal.style.display = "block";
    window.onclick = function(event) {
      if (event.target == sortModal) {
        sortModal.style.display = "none";
      }
    }
  }
  
  openfilters(){
    
    var filterModal = document.getElementById("filter-modal");    
    filterModal.style.display = "block";
    window.onclick = function(event) {
      if (event.target == filterModal) {
        filterModal.style.display = "none";
      }
    }
  }
  
  onFilterChanged(event){
    
    var filterModal = document.getElementById("filter-modal");    
    this.applyFilter.emit(event);
    filterModal.style.display = "none";
    
  }
}
