import {
    Component,
    OnInit
} from '@angular/core';

import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    Router} from '@angular/router-deprecated';

import {ProductComponent} from './product/product.component.ts';
import {ProductService} from './product/product.service.ts';
import {CartService} from './cart/cart.service';
import {CartComponent} from './cart/cart.component';

@Component(
    {
        selector: 'my-app',
        template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Products']">Products</a>
      <a [routerLink]="['Cart']">Cart</a>
    </nav>
    <router-outlet></router-outlet>
  `,
        styleUrls: [ 'app/app.component.css' ],
        directives: [ ROUTER_DIRECTIVES ],
        providers: [
            ROUTER_PROVIDERS,
            ProductService,
            CartService
        ]
    }
)
@RouteConfig(
    [
        {
            path: '/products',
            name: 'Products',
            component: ProductComponent
        },
        {
            path: '/cart',
            name: 'Cart',
            component: CartComponent
        },
        {
            path: '/', name: 'Index', component: ProductComponent, useAsDefault: true }

    ]
)
export class AppComponent   {
    title = 'Web Store3';
  /*  constructor(private router:Router){}

   /!* ngOnInit() {
        this.router.navigate();
        console.log('onInit');
    }*!/*/
}
