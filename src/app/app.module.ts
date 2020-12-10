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
    CourseCardComponent
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
