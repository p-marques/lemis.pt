import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from '../models/products';
import { TranslateService } from '../shared/translate.service';
import { LanguageCode } from '../models/enums';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'lemis-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  public get currentLanguage(): LanguageCode {
    return this.translateService.appLanguage;
  }

  constructor(private productsService: ProductsService, private translateService: TranslateService, private route: ActivatedRoute,
    private titleService: Title) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id).subscribe(data => {
      this.product = data;
      this.titleService.setTitle('Lemis Ibérica - ' + data.name[0]);
    });
  }

}
