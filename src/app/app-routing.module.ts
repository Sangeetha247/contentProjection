import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from '../app/course/course-list/course-list.component';
import { TutorListComponent } from '../app/tutors/tutor-list/tutor-list.component';
import { TemplateExampleComponent } from '../app/template-example/template-example.component';


const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'course', component: CourseListComponent },
  { path: 'tutor', component: TutorListComponent },
  { path: 'template', component: TemplateExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
