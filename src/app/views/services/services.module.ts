import { NgModule } from '@angular/core';
import { ServicesRoutingModule } from './services-routing.module';
import { MainComponent } from './main/main.component';
import { CarditemBlogComponent } from './carditem-blog/carditem-blog.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent,
    CarditemBlogComponent
  ],
  imports: [
    ServicesRoutingModule,
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class ServicesModule { }
