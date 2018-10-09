import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from '../models/products';
import { TranslateService } from '../shared/translate.service';
import { LanguageCode } from '../models/enums';
import { Router } from '@angular/router';

@Component({
  selector: 'lemis-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  filteredProducts: IProduct[] = [];
  tags: string[][];
  selectedTag: string[] = ['Todos', 'Tout', 'All'];

  public get currentLanguage(): LanguageCode {
    return this.translateService.appLanguage;
  }

  constructor(private productsService: ProductsService, private translateService: TranslateService, private router: Router) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(
      data => {
        this.productsService.products = data.products;
        this.filterProducts(this.selectedTag);
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
      this.filteredProducts = this.productsService.products;
      return;
    }

    this.filteredProducts = [];
    for (let i = 0; i < this.productsService.products.length; i++) {
      const product = this.productsService.products[i];

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

  public goToProduct(product: IProduct): void {
    const n = product.name[this.currentLanguage].replace(new RegExp(' ', 'g'), '-');

    this.router.navigate(['/produtos', product.id, { nome: n }]);
  }

}
