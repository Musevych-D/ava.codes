import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category, ShopService} from '../../../shared-services/shop.service';
import {ActivatedRoute} from '@angular/router';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'ava-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit, OnDestroy {
  public category: Category;

  private category$: Subject<string>;
  private sub: Subscription;

  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute,
  ) {
    this.category$ = this.shopService.getSelectedCategory$();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      param => {
        this.category = this.shopService.getCategory(param['categoryId']);
        this.category$.next(param['categoryId']);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.category$.next('');
    this.sub.unsubscribe();
  }

}
