import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';


@NgModule({
  declarations: [
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    BreadcrumbsComponent
  ]
})
export class BreadcrumbsModule { }
