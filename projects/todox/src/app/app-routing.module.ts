import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { AuthGuard } from './auth/AuthGuard';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'test1', component: Test1Component},
  {path: 'test2', component: Test2Component},
  {path: 'test3', component: Test3Component},
  {path: 'test4', component: Test4Component, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouteCustomAddedComponents =
[Test1Component, Test2Component, Test3Component, Test4Component];
