import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NewsListComponent } from './news-list.component';
import { NewsItemComponent } from './news-item.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ],
  declarations: [
    NewsListComponent,
    NewsItemComponent
  ]
})
export class NewsModule { }
