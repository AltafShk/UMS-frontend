import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-coursefacultyquizzes',
  templateUrl: './coursefacultyquizzes.component.html',
  styleUrls: ['./coursefacultyquizzes.component.css']
})
export class CoursefacultyquizzesComponent implements OnInit {
  quizzes: any;

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private backend: BackendService) {}

  course_name: String;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
      console.log(this.course_name);
    });
    
    this.backend.getQuizzesFaculty(localStorage.getItem("token")).subscribe(val => {
      console.log(val)
      this.quizzes = []
      for (let index = 0; index < val.quizzes.length; index++) {
        if(val.quizzes[index].available === true && val.quizzes[index].course.course_name === this.course_name ){
          this.quizzes.push(val.quizzes[index]);
        }
      }
    });
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  createQuiz(){
    //route this to the create quiz page
  }

}
