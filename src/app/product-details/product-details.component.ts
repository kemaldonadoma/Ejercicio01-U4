import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from "../products.service";

import {CartService} from "../cart.service";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
public products;
public product;
  constructor( private route: ActivatedRoute, private cart: CartService , private prodService: ProductsService ){ 
    this.products = prodService.products;
   }

  ngOnInit() {
    //cuando se hace una solicitud de GET,POST,PUT etc...
    this.route.paramMap.subscribe(
      params=>{
        this.product = this.products[+params.get('productId')];
      }
    );

  }

  addToCart(product){
    this.cart.addToCart(product);
    alert("Se añadio al carrito "+JSON.stringify(this.cart.getItems()));
  }

}
