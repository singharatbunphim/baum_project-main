import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
