import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import { BackendService } from '../backend.service';


@Component({
  selector: 'app-coursefaculty-pastquizzes',
  templateUrl: './coursefaculty-pastquizzes.component.html',
  styleUrls: ['./coursefaculty-pastquizzes.component.css']
})

export class CoursefacultyPastquizzesComponent implements OnInit {
  quizzes: any;

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private backend: BackendService ){}

  course_name: String;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
      console.log(this.course_name);
    });

    var id;
    this.backend.courses_list_share.subscribe(val => {
      for (let index = 0; index < val.length; index++) {
        var element: any;
         element = val[index];
         console.log(element.course_name, this.course_name)
        if(element.course_name === this.course_name){
          id = element._id;
          break
        }
      }
    });

    this.backend.quizzes_list_share.subscribe(val => {
      this.quizzes = [];
      for (let index = 0; index < val.length; index++) {
        var element: any = val[index]
        console.log(element)
        if(element.available === false){
          this.quizzes.push(element)
        }
      }})

    setTimeout( () => {
      console.log(id)
      this.backend.getQuizzesFaculty(localStorage.getItem("token")).subscribe(val => {
        this.backend.quizzes_list.next(val.quizzes);
      })
    
}, 1000);
    
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  // GradeQuiz(){
  //   //route this to the create quiz page
  // }

}