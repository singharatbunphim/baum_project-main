import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import {MegaMenuModule} from 'primeng/megamenu';
import {SlideMenuModule} from 'primeng/slidemenu';
@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PanelMenuModule,
    MenuModule,
    MegaMenuModule,
    SlideMenuModule,
  ],
  exports: [
    MainComponent
  ]
})
export class SidebarModule { }
