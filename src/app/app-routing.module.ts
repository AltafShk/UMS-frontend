import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { CoursehomeComponent } from './coursehome/coursehome.component';
import { CoursequizzesComponent } from './coursequizzes/coursequizzes.component';
import { CoursegradesComponent } from './coursegrades/coursegrades.component';
import { CourseattendanceComponent } from './courseattendance/courseattendance.component';
import { QuizDescComponent } from './quiz-desc/quiz-desc.component';

const routes: Routes = [{path:'', component: CoursesComponent},
                        {path:'courses', component:CoursesComponent},
                        {path:'help', component:HelpComponent},
                        {path:'my-account', component:MyAccountComponent},
                        {path:'course/:id', component:CourseComponent},
                        {path:'announcements', component:AnnouncementsComponent},
                        {path: 'course/:id/home', component:CoursehomeComponent},
                        {path: 'course/:id/quizzes', component:CoursequizzesComponent},
                        {path: 'course/:id/grades', component:CoursegradesComponent},
                        {path: 'course/:id/attendance', component:CourseattendanceComponent},
                        {path: 'course/:id/quizzes/:quizid', component:QuizDescComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
