import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CarouselModule }  from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CarouselModule,
    ButtonModule
  ],
  exports: [
    MainComponent
  ]
})
export class BlogModule { }
