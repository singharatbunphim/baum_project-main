import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { TrainingRoutingModule } from './training-routing.module';
import { CarditemTrainingComponent } from './carditem-training/carditem-training.component';
import { ViewComponent } from './view/view.component'


@NgModule({
  declarations: [
    MainComponent,
    CarditemTrainingComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule
  ],
  exports: [
    MainComponent,
    CarditemTrainingComponent
  ]
})
export class TrainingModule { }
