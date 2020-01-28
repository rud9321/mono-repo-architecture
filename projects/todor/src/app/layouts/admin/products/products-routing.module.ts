import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from '.';

const routes: Routes = [
  {
    path: '', component: ProductsComponent,
    children : [
      {
        path: 'add-product', component: AddProductComponent
      }
    ]
  }
  // ,
  // {
  //   path: 'add-product', component: AddProductComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
