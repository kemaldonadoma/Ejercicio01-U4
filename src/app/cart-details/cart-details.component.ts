import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  items;
  constructor( private cartService: CartService 
    ){ 
      this.items = this.cartService.getItems();
    }

  ngOnInit() {
  }

}
