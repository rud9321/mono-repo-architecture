import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProfileComponent, IndexComponent, SettingsComponent } from './pages';
import { Dudo1Component } from './pages/index/dudo1/dudo1.component';
import { Dudo2Component } from './pages/index/dudo2/dudo2.component';

@NgModule({
  declarations: [
    ProfileComponent,
    IndexComponent,
    AdminComponent,
    SettingsComponent,
    Dudo1Component,
    Dudo2Component],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
