import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'}
   // loadChildren: () => import('./admin/admin.module').then(_ => _.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
