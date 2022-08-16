import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './views/login/login.component';
const routes: Routes = [
  {path: '',redirectTo: "home/main",pathMatch:"full"},
  {
    path: '',
    component: MainLayoutComponent,
    data: {
      title: 'baum_project'
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('./views/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./views/about/about.module').then((m) => m.AboutModule)
      },
      {
        path: 'training',
        loadChildren: () => import('./views/training/training.module').then((m) => m.TrainingModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./views/services/services.module').then((m) => m.ServicesModule)
      },
      {
        path: 'project',
        loadChildren: () => import('./views/project/project.module').then((m)=> m.ProjectModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./views/blog/blog.module').then((m)=> m.BlogModule)
      },
      {
        path: 'publications',
        loadChildren: () => import('./views/publications/publications.module').then((m)=> m.PublicationsModule)
      },
      {
        path: 'course',
        loadChildren: () => import('./views/courses/courses.module').then((m)=> m.CoursesModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./views/order/order.module').then((m)=> m.OrderModule)
      },
    ]

  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { 
        path: '',
        loadChildren: () => import('./views/admin/admin.module').then((m) => m.AdminModule)
      }
    ]
  },

  {
    path: 'login',
    component: LoginComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
