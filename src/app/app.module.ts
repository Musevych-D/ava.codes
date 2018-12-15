import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {ShopModule} from './components/shop/shop.module';
import {HeaderModule} from './components/header/header.module';
import {CartModule} from './components/header/cart/cart.module';

import {CartService} from './components/header/cart/service/cart.service';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {routing} from './app.routing';
import { GreetingComponent } from './components/greeting/greeting.component';
import {ShopService} from './shared-services/shop.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    ShopModule,
    HeaderModule,
    CartModule,
  ],
  providers: [CartService, ShopService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
