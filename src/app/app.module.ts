import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { HelpComponent } from './help/help.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CoursehomeComponent } from './coursehome/coursehome.component';
import { CoursegradesComponent } from './coursegrades/coursegrades.component';
import { CoursequizzesComponent } from './coursequizzes/coursequizzes.component';
import { CourseattendanceComponent } from './courseattendance/courseattendance.component';
import { QuizRecordComponent } from './quiz-record/quiz-record.component';
import { QuizAvailableComponent } from './quiz-available/quiz-available.component';
import { QuizDescComponent } from './quiz-desc/quiz-desc.component';
import { CoursefacultyComponent } from './coursefaculty/coursefaculty.component';
import { CoursefacultyhomeComponent } from './coursefacultyhome/coursefacultyhome.component';
import { CoursefacultygradesComponent } from './coursefacultygrades/coursefacultygrades.component';
import { CoursefacultyquizzesComponent } from './coursefacultyquizzes/coursefacultyquizzes.component';
import { CoursefacultyattendanceComponent } from './coursefacultyattendance/coursefacultyattendance.component';
import { QuizAvailableFacultyComponent } from './quiz-available-faculty/quiz-available-faculty.component';
import { CoursefacultyPastquizzesComponent } from './coursefaculty-pastquizzes/coursefaculty-pastquizzes.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { AttendanceRecordComponent } from './attendance-record/attendance-record.component';
import { QuizFacultyDescComponent } from './quiz-faculty-desc/quiz-faculty-desc.component';
import { FacultyGradequizComponent } from './faculty-gradequiz/faculty-gradequiz.component';
import { FacultycoursesComponent } from './facultycourses/facultycourses.component';
import { ParentcoursesComponent } from './parentcourses/parentcourses.component';
import { CoursefacultyCardComponent } from './coursefaculty-card/coursefaculty-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SidenavComponent,
    HomeComponent,
    CourseComponent,
    HelpComponent,
    MyAccountComponent,
    AnnouncementsComponent,
    CourseCardComponent,
    CoursehomeComponent,
    CoursegradesComponent,
    CoursequizzesComponent,
    CourseattendanceComponent,
    QuizRecordComponent,
    QuizAvailableComponent,
    QuizDescComponent,
    CoursefacultyComponent,
    CoursefacultyhomeComponent,
    CoursefacultygradesComponent,
    CoursefacultyquizzesComponent,
    CoursefacultyattendanceComponent,
    QuizAvailableFacultyComponent,
    CoursefacultyPastquizzesComponent,
    CreateQuizComponent,
    AttendanceRecordComponent,
    QuizFacultyDescComponent,
    FacultyGradequizComponent,
    AttendanceRecordComponent,
    FacultycoursesComponent,
    ParentcoursesComponent,
    CoursefacultyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
