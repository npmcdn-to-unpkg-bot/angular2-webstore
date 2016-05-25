import {Component, OnInit} from '@angular/core';
import {NgIf, NgFor, FORM_DIRECTIVES} from "@angular/common";

import {CartService} from "./cart.service";
import {CartItem, CartItemInterface} from "./cart.items";

@Component(
    {
        selector: 'cart',
        directives: [ NgIf, NgFor, FORM_DIRECTIVES ],
        templateUrl: 'app/cart/cart.component.html'
    }
)
export class CartComponent implements OnInit {
    cartItems:CartItemInterface[];

    constructor( private cartService:CartService ) {}

    removeFromCart(cartItem: CartItem ) {
        this.cartService.deleteItem(cartItem);
        this.getCartItems();
    }

    getCartItems() {
        this.cartItems = this.cartService.getCartItems()
    }

    ngOnInit() {
        this.getCartItems()
    }

}