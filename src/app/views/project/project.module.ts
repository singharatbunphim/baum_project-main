import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { MainComponent } from './main/main.component';
import { CarditemProjectComponent } from './carditem-project/carditem-project.component';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    MainComponent,
    CarditemProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ImageModule
  ],
  exports: [
    MainComponent,
    CarditemProjectComponent
  ]
})
export class ProjectModule { }
