import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Product } from './product';
import { ProductService } from './product.service.ts';

import {CartService} from "../cart/cart.service";

@Component({
  selector: 'my-products',
  templateUrl: 'app/product/product.component.html',
  styleUrls:  ['app/product/product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService:CartService ) { }

  getProducts() {
    this.productService.getProducts().then(products => this.products = products);
  }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product) { this.selectedProduct = product; }

  gotoDetail() {
    this.router.navigate(['ProductDetail', { id: this.selectedProduct.id }]);
  }
  
  addToCart() {
    this.cartService.addItem(this.selectedProduct);
    console.log(this.cartService.getTotalPrice())
  }
}