import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/main', pathMatch: 'full' },
  {
    path: 'main',
    component: MainComponent,
    data: {
      title: 'Home : baum_project'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
