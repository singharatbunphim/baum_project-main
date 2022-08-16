import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PublicationsRoutingModule } from './publications-routing.module';
import { CarditemPublicComponent } from './carditem-public/carditem-public.component'


@NgModule({
  declarations: [
    MainComponent,
    CarditemPublicComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule
  ],
  exports: [
    MainComponent,
    CarditemPublicComponent
  ]
})
export class PublicationsModule { }
