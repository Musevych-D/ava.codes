import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../shared-services/shop.service';
import {CartService} from '../../header/cart/service/cart.service';

@Component({
  selector: 'ava-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  @Input() public product: Product;

  private isAddedToCart: boolean;

  constructor(
    private cartService: CartService,
  ) {
    this.isAddedToCart = false;
  }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.isAddedToCart = true;
    this.cartService.addToCart(product);
  }

}
