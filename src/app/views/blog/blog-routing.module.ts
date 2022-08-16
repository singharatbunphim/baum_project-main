import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {path: '', redirectTo: '/blog/main', pathMatch:'full'},
  {
    path: 'main',
    component: MainComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class BlogRoutingModule { }
