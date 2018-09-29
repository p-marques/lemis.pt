import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsListComponent } from './news/news-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CompanyComponent } from './company/company.component';
import { ProductsListComponent } from './products/products-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'news', component: NewsListComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
