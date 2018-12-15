import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopComponent} from './shop.component';
import {CategoryModule} from './category/category.module';
import {RouterModule} from '@angular/router';
import {ProductModule} from './product/product.module';
import {AllComponent} from './all/all.component';

@NgModule({
  imports: [CommonModule, RouterModule, CategoryModule, ProductModule],
  exports: [ShopComponent],
  declarations: [ShopComponent, AllComponent],
})
export class ShopModule {
}
