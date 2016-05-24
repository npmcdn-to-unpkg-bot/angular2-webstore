import {Component, OnInit} from '@angular/core';
import {NgIf, NgFor, FORM_DIRECTIVES} from "@angular/common";

import {Product} from '../product/product';
import {CartService} from "./cart.service";

@Component(
    {
        selector: 'cart',
        directives: [ NgIf, NgFor, FORM_DIRECTIVES ],
        templateUrl: 'app/cart/cart.component.html'
    }
)
export class CartComponent implements OnInit {
    private cartItems:Product[];

    constructor( private cartService:CartService ) {}

    getCartItems() {
        this.cartItems = this.cartService.getCart()
    }

    ngOnInit() {
        this.getCartItems()
    }

}