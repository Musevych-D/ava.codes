import { Component, OnInit } from '@angular/core';
import {Product, ShopService} from '../../../shared-services/shop.service';

@Component({
  selector: 'ava-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.sass']
})
export class AllComponent implements OnInit {
  public productList: Product[];

  constructor(
    private productService: ShopService,
  ) { }

  ngOnInit() {
    this.productList = this.productService.getProductListLocal();

  }

}
