import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductsList, IProductTagsList } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _productsApiUrl = 'api/products.json';
  private _productTagsApiUrl = 'api/productTags.json';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<IProductsList> {
    return this.http.get<IProductsList>(this._productsApiUrl);
  }

  public getTags(): Observable<IProductTagsList> {
    return this.http.get<IProductTagsList>(this._productTagsApiUrl);
  }

  // NOT IN USE
  // public getTagsInProductsList(products: IProduct[]): string[][] {
  //   const tags: string[][] = [];

  //   for (let i = 0; i < products.length; i++) {
  //     const product = products[i];

  //     product.tags.forEach(x => {
  //       let counter = 0;
  //       for (let y = 0; y < tags.length; y++) {
  //         const tag = tags[y];
  //         if (x[0] === tag[0]) {
  //           counter++;
  //         }
  //       }

  //       if (counter === 0) {
  //         tags.push(x);
  //       }
  //     });
  //   }

  //   return tags;
  // }
}
