import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private backend: BackendService) {}


  courses_list: any
  grades_list: any;
  quizzes_list: any;

  ngOnInit(): void {
    // this.backend.getCourses("token");
    // this.backend.courses_list_share.subscribe(val => {this.courses_list = val})

    // this.backend.getGrades(1, "token");
    // this.backend.grades_list_share.subscribe(val => {this.courses_list = val})

    // this.backend.getQuizzes(1, "token");
    // this.backend.quizzes_list_share.subscribe(val => {this.courses_list = val})
  }

}
