import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductsList, IProductTagsList, IProduct } from '../models/products';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _productsApiUrl = 'api/products.json';
  private _productTagsApiUrl = 'api/productTags.json';
  private _products: IProduct[] = [];

  public get products(): IProduct[] {
    return this._products;
  }
  public set products(v: IProduct[]) {
    this._products = v;
  }

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<IProductsList> {
    return this.http.get<IProductsList>(this._productsApiUrl);
  }

  public getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(this._productsApiUrl).pipe(
      map((data: IProductsList) => data.products.find(x => x.id === id))
    );
  }

  public getTags(): Observable<IProductTagsList> {
    return this.http.get<IProductTagsList>(this._productTagsApiUrl);
  }
}
