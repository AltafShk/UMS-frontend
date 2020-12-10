import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

const routes: Routes = [{path:'courses', component:CoursesComponent},
                        {path:'help', component:HelpComponent},
                        {path:'my-account', component:MyAccountComponent},
                        {path:'course', component:CourseComponent},
                        {path:'announcements', component:AnnouncementsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
