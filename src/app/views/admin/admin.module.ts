import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { UsersComponent } from './users/users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders/orders.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { CourseComponent } from './courses/course/course.component';
import { RouterModule } from '@angular/router';
import { AdminViewRoutingModule } from './admin-view-routing.module';
import {InputSwitchModule} from 'primeng/inputswitch';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import {DropdownModule} from 'primeng/dropdown';
import { CourseAddListComponent } from './courses/course-add/course-add-list/course-add-list.component';
import {PickListModule} from 'primeng/picklist';
import {MultiSelectModule} from 'primeng/multiselect';
import {ListboxModule} from 'primeng/listbox';
import {EditorModule} from 'primeng/editor';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserApiComponent } from './users/user-api/user-api.component';
import { TrainingComponent } from './trainings/training/training.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { PublicationsComponent } from './publications/publications/publications.component';
import { BlogsApiComponent } from './blogs/blogs-api/blogs-api.component';
import { BlogsViewComponent } from './blogs/blogs-view/blogs-view.component';
import { BlogsEditComponent } from './blogs/blogs-edit/blogs-edit.component';
import { BlogsAddComponent } from './blogs/blogs-add/blogs-add.component';
import { CourseViewComponent } from './courses/course-view/course-view.component';
import { CourseApiComponent } from './courses/course-api/course-api.component';
import { OrdersApiComponent } from './orders/orders-api/orders-api.component';
import { OrdersViewComponent } from './orders/orders-view/orders-view.component';
import { OrdersEditComponent } from './orders/orders-edit/orders-edit.component';
import { OrdersAddComponent } from './orders/orders-add/orders-add.component';
import { ProjectsAddComponent } from './projects/projects-add/projects-add.component';
import { ProjectsViewComponent } from './projects/projects-view/projects-view.component';
import { ProjectsApiComponent } from './projects/projects-api/projects-api.component';
import { ProjectsEditComponent } from './projects/projects-edit/projects-edit.component';
import { PublicationsApiComponent } from './publications/publications-api/publications-api.component';
import { PublicationsAddComponent } from './publications/publications-add/publications-add.component';
import { PublicationsEditComponent } from './publications/publications-edit/publications-edit.component';
import { PublicationsViewComponent } from './publications/publications-view/publications-view.component';
import { TrainingViewComponent } from './trainings/training-view/training-view.component';
import { TrainingEditComponent } from './trainings/training-edit/training-edit.component';
import { TrainingAddComponent } from './trainings/training-add/training-add.component';
import { TrainingApiComponent } from './trainings/training-api/training-api.component';
import { UsersViewComponent } from './users/users-view/users-view.component';

@NgModule({
  declarations: [
    LoginComponent,
    UsersComponent,
    DashboardComponent,
    OrdersComponent,
    TrainingComponent,
    ProjectsComponent,
    BlogsComponent,
    PublicationsComponent,
    CourseComponent,
    CourseAddComponent,
    CourseAddListComponent,
    UserEditComponent,
    UserApiComponent,
    BlogsApiComponent,
    BlogsViewComponent,
    BlogsEditComponent,
    BlogsAddComponent,
    CourseViewComponent,
    CourseApiComponent,
    OrdersApiComponent,
    OrdersViewComponent,
    OrdersEditComponent,
    OrdersAddComponent,
    ProjectsAddComponent,
    ProjectsViewComponent,
    ProjectsApiComponent,
    ProjectsEditComponent,
    PublicationsApiComponent,
    PublicationsAddComponent,
    PublicationsEditComponent,
    PublicationsViewComponent,
    TrainingViewComponent,
    TrainingEditComponent,
    TrainingAddComponent,
    TrainingApiComponent,
    UsersViewComponent,
  ],
  imports: [
    CommonModule,
    ChartModule,
    TableModule,
    RouterModule,
    AdminViewRoutingModule,
    InputSwitchModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    PaginatorModule,
    DropdownModule,
    PickListModule,
    MultiSelectModule,
    ListboxModule,
    EditorModule
    
  ],
  exports: [
    CourseAddComponent
  ],
})
export class AdminModule { }
