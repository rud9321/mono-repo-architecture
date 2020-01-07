import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule, FooterComponent, HeaderComponent } from './shared';
import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule ,
    AppRoutingModule,
     HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
