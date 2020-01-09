import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  currentFilterValue:number=10000;
  @Output() onFilterChanged = new EventEmitter<any>();
  filterForm=new FormGroup({
    filterRange:new FormControl(),
  })
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.initFilters()

  }

  initFilters(){
    this.currentFilterValue=this.commonService.getFilterValue();
  }

  updateTextInput(event){

    this.currentFilterValue=event.target.value;
    console.log(event.target.value)
  }

  onSubmit(){
    this.commonService.setFilterValue(this.currentFilterValue)
    this.onFilterChanged.emit(this.currentFilterValue);
  }
}
