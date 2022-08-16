import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
