import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BackendService} from '../backend.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:any;
  user: any;

  constructor(private backend: BackendService) { } 

  ngOnInit(): void {
    this.backend.getCourses(localStorage.getItem("token")).subscribe(val =>{
      this.courses = val.courses;
      this.backend.courses_list.next(val.courses)
    })

    

      setTimeout( () => {
          this.backend.getGrades(localStorage.getItem("token")).subscribe(val => {
            this.backend.grades_list.next(val);
          })
      }, 1000);   
      
    //   setTimeout( () => {
    //       this.backend.getQuizzes("5fdcd554caefdb41440c116e", localStorage.getItem("token")).subscribe(val => {
    //         this.backend.quizzes_list.next(val);
    //       })
        
    // }, 1000);

    setTimeout( () => {
      this.backend.getStudents().subscribe(val => {
        this.backend.students_list.next(val);
      })
}, 1000);

setTimeout( () => {
  this.backend.curr_user_share.subscribe(val => this.user = val)
}, 1000);
    }

}
