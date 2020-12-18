import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute, Router, NavigationStart } from '@angular/router'


@Component({
  selector: 'app-quiz-faculty-desc',
  templateUrl: './quiz-faculty-desc.component.html',
  styleUrls: ['./quiz-faculty-desc.component.css']
})
export class QuizFacultyDescComponent implements OnInit {
  private routeSub: Subscription;
  

  course_name: String;
  quiz: any;

  notyetsubmitted = true;
  submitted = false;

  constructor(private router:Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
    });
    this.quiz = history.state;
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  DeleteQuiz(){

  }

  GradeQuiz(){
    
  }

}
