import { Component, NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './courses/course/course.component';
import { UsersComponent } from './users/users/users.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { PublicationsComponent } from './publications/publications/publications.component';
import { OrdersComponent } from './orders/orders/orders.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import { TrainingComponent } from './trainings/training/training.component';
const routes: Routes = [
  {
    path: '',redirectTo:'dashboard',pathMatch: 'full'
  },
  {
    path: 'dashboard' , component: DashboardComponent
  },
  {
    path: 'course' , component: CourseComponent,
  },
  {
    path: 'course/edit' , component: CourseEditComponent,
  },
  {
    path: 'course/add' , component: CourseAddComponent ,
  },
  {
    path: 'training' , component: TrainingComponent 
  },
  {
    path: 'users' , 
    children: [
      {
        path: '',
        component: UsersComponent,
        data: {
          title: 'Get all users',
        }
      },
      {
        path: 'edit/:uid',
        component: UserEditComponent,
        data: {
          title: 'Edit User by ID',
        }
      }
    ]
  },
  {
    path: 'blogs' , component: BlogsComponent
  },
  {
    path: 'orders' , component: OrdersComponent
  },
  {
    path: 'publications', component: PublicationsComponent
  },
  {
    path: 'project', component: ProjectsComponent
  },
  
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminViewRoutingModule { }
