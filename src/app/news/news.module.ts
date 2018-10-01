import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NewsListComponent } from './news-list.component';
import { NewsItemObras2015Component } from './news-items/news-item-obras2015.component';
import { NewsItemMuseuVAlegreComponent } from './news-items/news-item-museu-valegre.component';
import { NewsItemDeltaComponent } from './news-items/news-item-delta.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ],
  declarations: [
    NewsListComponent,
    NewsItemObras2015Component,
    NewsItemMuseuVAlegreComponent,
    NewsItemDeltaComponent
  ]
})
export class NewsModule { }
