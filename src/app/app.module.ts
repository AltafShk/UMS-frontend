import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    QuizDescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
