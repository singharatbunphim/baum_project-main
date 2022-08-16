import { NgModule , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
