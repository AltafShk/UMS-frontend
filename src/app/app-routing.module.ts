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
import { HomeComponent } from './home/home.component';
import { CoursefacultyComponent } from './coursefaculty/coursefaculty.component';
import { CoursefacultyquizzesComponent } from './coursefacultyquizzes/coursefacultyquizzes.component';
import { CoursefacultyPastquizzesComponent } from './coursefaculty-pastquizzes/coursefaculty-pastquizzes.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizFacultyDescComponent } from './quiz-faculty-desc/quiz-faculty-desc.component';
import { CoursefacultygradesComponent } from './coursefacultygrades/coursefacultygrades.component';
import { ParentcoursesComponent } from './parentcourses/parentcourses.component';
import { CoursefacultyhomeComponent } from './coursefacultyhome/coursefacultyhome.component';

const routes: Routes = [
                        {path:'courses', component:ParentcoursesComponent},
                        {path:'help', component:HelpComponent},
                        {path:'my-account', component:MyAccountComponent},
                        {path:'course/:id', component:CourseComponent},
                        {path:'announcements', component:AnnouncementsComponent},
                        {path: 'course/:id/home', component:CoursehomeComponent},
                        {path: 'course/:id/quizzes', component:CoursequizzesComponent},
                        {path: 'course/:id/grades', component:CoursegradesComponent},
                        {path: 'course/:id/attendance', component:CourseattendanceComponent},
                        {path: 'course/:id/quizzes/:quizid', component:QuizDescComponent},
                        {path: 'coursefaculty/:id', component:CoursefacultyComponent},
                        {path: 'coursefaculty/:id/quizzes', component:CoursefacultyquizzesComponent},
                        {path: "coursefaculty/:id/pastquizzes", component:CoursefacultyPastquizzesComponent},
                        {path: "coursefaculty/:id/createquiz", component:CreateQuizComponent},
                        {path: "coursefaculty/:id/quizzes/:quizid", component:QuizFacultyDescComponent},
                        {path: "coursefaculty/:id/quizzes/:quizid/grades", component:CoursefacultygradesComponent},
                        {path: "coursefaculty/:id/home", component:CoursefacultyhomeComponent}];
                        

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
