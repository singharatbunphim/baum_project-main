import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AuthService } from './api/auth.service';
import { CourseService } from './api/course.service';
import { InstructorService } from './api/instructor.service';
import { MaterialService } from './api/material.service';
import { NewsService } from './api/news.service';
import { OrderService } from './api/order.service';
import { PagesService } from './api/pages.service';
import { ProjectService } from './api/project.service';
import { PublicationService } from './api/publication.service';
import { ReviewService } from './api/review.service';
import { ServiceService } from './api/service.service';
import { SharesService } from './api/shares.service';
import { TrainingService } from './api/training.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AuthService,
    CourseService,
    InstructorService,
    MaterialService,
    NewsService,
    OrderService,
    PagesService,
    ProjectService,
    PublicationService,
    ReviewService,
    ServiceService,
    SharesService,
    TrainingService,
    UserService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
