import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProfileComponent, IndexComponent, SettingsComponent, Dudo1Component, Dudo2Component } from './pages';

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
