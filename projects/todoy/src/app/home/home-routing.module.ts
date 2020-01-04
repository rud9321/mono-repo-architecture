import { NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeAuthResolverService } from './home-auth-resolver.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
     resolve: {
      isAuthenticated: HomeAuthResolverService
      }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

