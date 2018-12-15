import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export class Product {
  constructor(
    public id: string,
    public category: string,
    public price: string,
    public imgSrc: number,
  ) {
  }
}

export interface Category {
  id: string;
  products: Product[];
}


@Injectable()
export class ShopService {
  private productList: Product[];
  private categoryList: Category[];
  private selectedCategory$: Subject<string> = new Subject();


  constructor() {
    this.productList = this.getProductListRemote(30);
    this.categoryList = this.setCategoriesList(this.productList);
  }

  public getSelectedCategory$(): Subject<string> {
    return this.selectedCategory$;
  }

  public getCategory(categoryId: string): Category {
    return this.categoryList.find(category => {
      return category.id === categoryId;
    });
  }

  public getCategoriesList(): Category[] {
    return this.categoryList;
  }

  public setCategoriesList(productList: Product[]): Category[] {
    return this.sortProductsByCategory(productList);
  }

  public getProductListLocal(): Product[] {
    return this.productList;
  }

  public getProductListRemote(quantity: number): Product[] {
    return this.fetchProductListImitation(quantity);
  }

  private fetchProductListImitation(quantity: number): Product[] {
    const arr = [];
    for (let index = 1; index <= quantity; index++) {
      const categoryId = Math.ceil(index / 10);
      const price = (Math.floor(Math.random() * (index * 2 - 1 + 1) + 1)).toFixed();
      arr.push(new Product(`${index}`, `category${categoryId}`, price, categoryId));
    }
    return arr;
  }

  private sortProductsByCategory(productList: Product[]): Category[] {
    const obj = {};
    const arr = [];
    productList.forEach(product => {
      if (!obj[product.category]) {
        obj[product.category] = [];
      }
      obj[product.category].push(product);
    });

    for (const categoryId in obj) {
      arr.push({id: categoryId, products: obj[categoryId]});
    }

    return arr;
  }


}
