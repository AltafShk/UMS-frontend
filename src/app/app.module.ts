import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DisplayComponent } from './display/display.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { HelpComponent } from './help/help.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    DisplayComponent,
    CoursesComponent,
    CourseComponent,
    MyAccountComponent,
    HelpComponent,
    AnnouncementsComponent,
    CourseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
