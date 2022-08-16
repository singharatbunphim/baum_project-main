import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutModule } from 'src/app/layouts/admin-layout/admin-layout.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MainComponent
  ]
})
export class HeaderModule { }
