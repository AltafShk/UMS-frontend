import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute, Router, NavigationStart } from '@angular/router'


@Component({
  selector: 'app-quiz-desc',
  templateUrl: './quiz-desc.component.html',
  styleUrls: ['./quiz-desc.component.css']
})
export class QuizDescComponent implements OnInit {

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

  submitQuiz(){
    //TODO: Submit quiz for current student
    this.notyetsubmitted = false;
    this.submitted = true;
  }

}
