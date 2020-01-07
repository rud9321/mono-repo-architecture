import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {SharedModule} from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeAuthResolverService } from './home-auth-resolver.service';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers: [HomeAuthResolverService]
})
export class HomeModule { }
