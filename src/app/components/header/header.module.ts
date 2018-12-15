import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {RouterModule} from '@angular/router';
import {CartModule} from './cart/cart.module';

@NgModule({
  imports: [CommonModule, RouterModule, CartModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  bootstrap: [HeaderComponent],
})
export class HeaderModule {
}
