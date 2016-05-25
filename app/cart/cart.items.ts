export interface CartItemInterface {
    id:number;
    name:string;
    price:number;
    amount?:number;
}

export class CartItem implements CartItemInterface {
    id:number;
    name:string;
    price:number;
    amount:number;

    constructor(id:number, name:string, price:number, amount?:number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}
