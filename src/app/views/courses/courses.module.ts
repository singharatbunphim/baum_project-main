import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { MainComponent } from './main/main.component';
import { CarditemCourseComponent } from './carditem-course/carditem-course.component';


@NgModule({
  declarations: [
    MainComponent,
    CarditemCourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
