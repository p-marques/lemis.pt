import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListComponent } from './news-list.component';
import { NewsItemComponent } from './news-item.component';

const routes: Routes = [
  { path: 'news/:id', component: NewsItemComponent },
  { path: 'news', component: NewsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
