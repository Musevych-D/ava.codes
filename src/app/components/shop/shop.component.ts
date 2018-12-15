import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Category, ShopService} from '../../shared-services/shop.service';
import {Router} from '@angular/router';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'ava-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit, OnDestroy, AfterViewInit {
  public categoryList: Category[];
  public selectedCategory: string;

  private selectedCategory$: Subject<string>;
  private sub: Subscription;


  constructor(
    private shopService: ShopService,
    private router: Router,
  ) {
    this.selectedCategory = '';
  }

  ngOnInit() {
    this.categoryList = this.shopService.getCategoriesList();
    this.selectedCategory$ = this.shopService.getSelectedCategory$();


  }

  ngAfterViewInit() {
    this.sub = this.selectedCategory$.subscribe(
      categoryId => {
        this.activateTab(categoryId);
      },
      err => {
        return console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onCategorySelect(category: string): void {
    this.selectedCategory$.next(category);
  }

  private activateTab(category: string): string {
    return this.selectedCategory = category;
  }

  public backToShop(): void {
    this.router.navigate(['/shop', 'all']);
    this.selectedCategory = '';
  }

}
