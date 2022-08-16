import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from '@angular/router';
import { CourseComponent } from 'src/app/views/admin/courses/course/course.component';
import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
  {path:'' , redirectTo: '/admin/dashboard', pathMatch: "full" },
  {path:'admin/course', component: CourseComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
