import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from '../models/products';
import { TranslateService } from '../shared/translate.service';
import { LanguageCode } from '../models/enums';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'lemis-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[];
  filteredProducts: IProduct[];
  tags: string[][];
  selectedTag: string[] = ['', '', ''];

  public get currentLanguage(): LanguageCode {
    return this.translateService.appLanguage;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver, private productsService: ProductsService,
    private translateService: TranslateService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(
      data => {
        this.products = data.products;
        this.filterProducts(['Todos']);
      }
    );

    this.productsService.getTags().subscribe(
      data => {
        this.tags = data.productTags;
        this.selectedTag = this.tags[0];
      }
    );
  }

  public selectTag(tag: string[]) {
    this.selectedTag = tag;
    this.filterProducts(tag);
  }

  private filterProducts(inTag: string[]) {
    if (inTag[0] === 'Todos') {
      this.filteredProducts = this.products;
      return;
    }

    this.filteredProducts = [];
    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];

      for (let y = 0; y < product.tags.length; y++) {
        const tag = product.tags[y];

        if (inTag[0] === tag[0]) {
          this.filteredProducts.push(product);
        }
      }

    }
  }

  public isSelectedTag(tag: string[]): boolean {
    return this.selectedTag[this.currentLanguage] === tag[this.currentLanguage];
  }

}
