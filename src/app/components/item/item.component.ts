import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Input('itemModel') itemModel:ItemListModel;
  @Output() onAddToCart = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  addToCart(){

    this.onAddToCart.emit(this.itemModel);

  }

}
