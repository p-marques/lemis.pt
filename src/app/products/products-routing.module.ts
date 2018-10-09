import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list.component';
import { ProductDetailsComponent } from './product-details.component';

const routes: Routes = [
  { path: 'produtos', component: ProductsListComponent },
  { path: 'produtos/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
