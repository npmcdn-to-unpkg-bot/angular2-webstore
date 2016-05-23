import {Component} from '@angular/core';
import {NgIf, FORM_DIRECTIVES} from "@angular/common";

import {Product} from '../product/product';
import {CartService} from "./cart.service";

@Component({
    selector:'cart',
    directives:[NgIf, FORM_DIRECTIVES],
    template: `
        <h2>Cart</h2>
        <div *ngIf=cartItems>
            <div class="container">
                <div class="row" *ngFor="#item of cartItems">
                    <item-preview [item]="item"></item-preview>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    Total pay: {{cartItems.id}}
                    Total pay: {{cartService.getTotalPrice()}}
                </div>
            </div>
         
            <div class="container" *ngIf="paymentOutput">
                <div class="row">
                    {{paymentOutput}}
                </div>
            </div>
        </div>
    `,
})

export class CartComponent {
    private cartItems: Product[] = [];
    private paymentOutput: string = "";
    constructor(private cartService:CartService ){
        this.cartItems = cartService.getCart();
    }

}