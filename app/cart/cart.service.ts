import {Injectable} from '@angular/core';
import {CartItemInterface, CartItem} from '../cart/cart.items';

@Injectable()
export class CartService {
    private cartItems:CartItemInterface[] = [];

    addCartItem(cartItem:CartItemInterface) {
        if (this.cartItems.length) {
            var isExistingProduct = this.getExistingCartItem(cartItem.id);
            if (!isExistingProduct) {
                this.createNewCartItem(new CartItem(cartItem.id, cartItem.name, cartItem.price, 1));
            } else {
                isExistingProduct.amount = isExistingProduct.amount + 1;
            }
        } else {
            this.createNewCartItem(new CartItem(cartItem.id, cartItem.name, cartItem.price, 1));
        }
    }

    private createNewCartItem(cartItem:CartItemInterface):void {
        this.cartItems.push(cartItem);
    }

    deleteItem(item:CartItemInterface) {
        alert(item.id);
        this.cartItems = this.cartItems.filter(cartItem=>cartItem.id !== item.id);
    }

    clearCart() {
        this.cartItems = [];
    }

    private getExistingCartItem(newId:number):CartItemInterface {
        return this.cartItems.filter
        (item => item.id === newId)[0];
    }

    getCartItems():CartItemInterface[] {
        return this.cartItems;
    }

    getItemPrice(): number {
        return this.cartItems.reduce(
            (sum, cartItem)=> {
                return sum += cartItem.price, sum;
            }, 0
        );
    }

    getTotalPrice(): number {
        return this.cartItems.reduce(
            (sum, cartItem)=> {
                return sum += cartItem.price * cartItem.amount, sum;
            }, 0
        );
    }


}