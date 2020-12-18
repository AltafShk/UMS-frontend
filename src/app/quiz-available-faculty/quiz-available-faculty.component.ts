import { Component, OnInit, Input } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-quiz-available-faculty',
  templateUrl: './quiz-available-faculty.component.html',
  styleUrls: ['./quiz-available-faculty.component.css']
})
export class QuizAvailableFacultyComponent implements OnInit {
  
  @Input() quiz: any;
  
  course_name: String;

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
      console.log(this.course_name);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  deleteQuiz(){
    //delete quiz from backend
  }


}
