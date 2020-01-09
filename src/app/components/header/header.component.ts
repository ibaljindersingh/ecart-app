import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input('searchText') searchText:string='';
  @Input('hideCartIcon') hideCartIcon:boolean=false;
  @Output() onSearchText = new EventEmitter<any>();

  constructor(    private router: Router,
    ) { }
    
    ngOnInit() {
    }
    
    navigateToCart(){
      this.router.navigateByUrl('/checkout')

    }
    
    onSearch(event){

      this.onSearchText.emit(event)

    }
  }
  