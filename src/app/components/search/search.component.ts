import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  faSearch=faSearch;
  @Output() onSearchText = new EventEmitter<any>();

  @Input('searchText') searchText:string='';
  constructor() { }

  ngOnInit() {
  }

  onSearch(event){
    this.onSearchText.emit(event.target.value)

  }
}
