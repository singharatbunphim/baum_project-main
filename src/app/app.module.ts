import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FormsModule } from '@angular/forms';
import { TrainingRoutingModule } from './views/training/training-routing.module';
import { ServicesRoutingModule } from './views/services/services-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectRoutingModule } from './views/project/project-routing.module';
import { PublicationsRoutingModule } from './views/publications/publications-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SidebarModule } from './components/sidebar/sidebar.module'
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { TableModule } from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PickListModule} from 'primeng/picklist';
import {EditorModule} from 'primeng/editor';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    TrainingRoutingModule,
    ServicesRoutingModule,
    ReactiveFormsModule,
    ProjectRoutingModule,
    PublicationsRoutingModule,
    HttpClientModule,
    SidebarModule,
    BreadcrumbsModule,
    TableModule,
    PaginatorModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    PickListModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
