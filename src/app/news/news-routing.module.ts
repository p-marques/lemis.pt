import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListComponent } from './news-list.component';
import { NewsItemObras2015Component } from './news-items/news-item-obras2015.component';
import { NewsItemMuseuVAlegreComponent } from './news-items/news-item-museu-valegre.component';
import { NewsItemDeltaComponent } from './news-items/news-item-delta.component';

const routes: Routes = [
  { path: 'noticias/nova-cadeira-de-aluno-delta', component: NewsItemDeltaComponent },
  { path: 'noticias/mobiliario-lemis-no-museu-da-vista-alegre', component: NewsItemMuseuVAlegreComponent },
  { path: 'noticias/principais-obras-da-lemis-em-2015', component: NewsItemObras2015Component },
  { path: 'noticias', component: NewsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
