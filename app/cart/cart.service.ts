import {Injectable} from '@angular/core';
import {Product} from '../product/product';

@Injectable()
export class CartService {
    private cart:Product[]=[];
    
    addItem(item:Product){
        this.cart.push(item);
    }
    deleteItem(item:Product){
        this.cart = this.cart.filter(cartItem=>cartItem.id!==item.id);
    }
    clearCart(){
        this.cart = [];
    }
 
    getCart():Product[]{
        return this.cart;
    }
    getTotalPrice(){
        let totalPrice = this.cart.reduce((sum, cartItem)=>{
            return sum+=cartItem.price, sum;
        },0);

        console.log(totalPrice);

        return totalPrice;
        
    }
}