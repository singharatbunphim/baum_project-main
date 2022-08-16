import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { BreadcrumbsModule } from 'src/app/components/breadcrumbs/breadcrumbs.module';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    BreadcrumbsModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
