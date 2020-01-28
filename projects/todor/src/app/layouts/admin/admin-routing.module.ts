import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { IndexComponent, ProfileComponent, SettingsComponent, Dudo1Component, Dudo2Component } from './pages';

const routes: Routes = [
  {
      path: '', component: AdminComponent, children: [
      {
        path: 'home', component: IndexComponent, children: [
          {
            path: 'dudo1', component: Dudo1Component
           },
           {
            path: 'dudo2', component: Dudo2Component
           }
        ]
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'settings', component: SettingsComponent
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module')
        .then(_ => _.ProductsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
