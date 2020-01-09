import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent, ContactUsComponent, AboutUsComponent } from './home';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'admin',
     loadChildren: () => import('./layouts/admin/admin.module')
     .then(_ => _.AdminModule)
  },
  {
    path: 'user',
     loadChildren: () => import('./layouts/user/user.module')
     .then(_ => _.UserModule)
  },
  {
    path: '**', component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
