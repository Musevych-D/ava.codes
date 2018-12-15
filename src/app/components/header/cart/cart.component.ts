import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cart, CartService} from './service/cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ava-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit, OnDestroy {
  public cart: Cart;

  private sub: Subscription;

  constructor(
    private cartService: CartService,
  ) {
  }

  ngOnInit() {
    this.cart = this.cartService.getCartState();
    this.sub = this.cartService.getCart$().subscribe(
      cartState => {
        return this.cart = cartState;
      },
      err => {
        return console.log(err);
      }
    );
  }

  ngOnDestroy() {

  }

  public clearCart() {
    this.cartService.resetCartState();
  }

}
