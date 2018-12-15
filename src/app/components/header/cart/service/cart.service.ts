import {Injectable} from '@angular/core';
import {Product} from '../../../../shared-services/shop.service';
import {Subject} from 'rxjs';

export interface Cart {
  products: Product[];
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartState: Cart;
  private cartDefaultState: Cart;
  private cart$: Subject<Cart> = new Subject();

  constructor() {
    this.cartDefaultState = {products: [], total: 0};
    this.resetCartState();
  }

  public getCart$(): Subject<Cart> {
    return this.cart$;
  }

  public getCartState(): Cart {
   return this.cartState;
  }

  public addToCart(product: Product): void {
    this.updateCartState(product);
  }

  private updateCartState(product: Product): void {
    this.cartState.products.push(product);
    this.cartState.total += +product.price;
  }

  public resetCartState(): void {
    this.cartState = JSON.parse(JSON.stringify(this.cartDefaultState));
    this.cart$.next(this.cartState);
  }


}
