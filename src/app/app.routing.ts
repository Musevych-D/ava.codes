import {RouterModule, Routes} from '@angular/router';
import {ShopComponent} from './components/shop/shop.component';
import {CategoryComponent} from './components/shop/category/category.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {GreetingComponent} from './components/greeting/greeting.component';
import {AllComponent} from './components/shop/all/all.component';


const routes: Routes = [
  {path: '', component: GreetingComponent},
  {
    path: 'shop', component: ShopComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'all'},
      {path: 'all', component: AllComponent},
      // not using any components
      // module under loadChildren path would be loaded on demand. (can be checked in the network tab)
      {path: 'description', loadChildren: './components/shop/description/description.module'},
      {path: ':categoryId', component: CategoryComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}
];
export const routing = RouterModule.forRoot(routes);


