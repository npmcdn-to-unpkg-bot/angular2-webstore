import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    getProducts() {
        return Promise.resolve(PRODUCTS);
    }

    // See the "Take it slow" appendix
    getProductsSlowly() {
        return new Promise<Product[]>( resolve =>
            setTimeout(()=>resolve(PRODUCTS), 2000) // 2 seconds
        );
    }

   getProduct(id: number) {
        return Promise.resolve(PRODUCTS).then(
            products => products.filter(products => products.id === id)[0]
        );
    }
}