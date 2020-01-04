import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/AuthGuard';
import { AppRoutingModule, RouteCustomAddedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Test1Component } from './test1/test1.component';
// import { Test2Component } from './test2/test2.component';
import { DataService } from './data.service';
import { Test1Child1Component } from './test1/test1-child1/test1-child1.component';
import { Test2Child1Component } from './test2/test2-child1/test2-child1.component';
import { Test2Child2Component } from './test2/test2-child2/test2-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteCustomAddedComponents,
    Test1Child1Component,
    Test2Child1Component,
    Test2Child2Component
    // Test1Component,
    // Test2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
