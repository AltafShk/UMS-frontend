import { Component, OnInit, Input } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-quiz-available-faculty',
  templateUrl: './quiz-available-faculty.component.html',
  styleUrls: ['./quiz-available-faculty.component.css']
})
export class QuizAvailableFacultyComponent implements OnInit {
  
  @Input() quiz: any;
  
  course_name: String;

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private backend: BackendService) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
      console.log(this.course_name);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  lockQuiz(){
    this.backend.lockingQuiz(this.quiz._id, localStorage.getItem("token")).subscribe(val => {
      console.log(val);
      this.backend.quizzes_list.next(val.quizzes);
    })
   
  }


}
