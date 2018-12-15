import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './category.component';
import {ProductModule} from '../product/product.module';

@NgModule({
  imports: [CommonModule, ProductModule],
  exports: [CategoryComponent],
  declarations: [CategoryComponent],
})
export class CategoryModule {
}
