import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { CourseCardComponent } from './course/course-card/course-card.component';
import {DataServiceService} from './service/data-service.service';
import { CourseListComponent } from './course/course-list/course-list.component';
import { TutorCardComponent } from './tutors/tutor-card/tutor-card.component';
import { TutorListComponent } from './tutors/tutor-list/tutor-list.component';
import { TemplateExampleComponent } from './template-example/template-example.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    CourseCardComponent,
    CourseListComponent,
    TutorCardComponent,
    TutorListComponent,
    TemplateExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
