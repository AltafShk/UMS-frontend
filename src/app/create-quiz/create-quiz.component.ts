import { Component, OnInit, Input } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  @Input() quiz: any;
  
  course_name: any;
  quiz_name;
  date;
  marks;
  desc;

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private backend: BackendService) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }


    Createquiz(){
      this.backend.createQuiz(this.quiz_name, this.marks, this.course_name, this.desc, localStorage.getItem("token")).subscribe(val => {
        var temp;
        this.backend.quizzes_list_share.subscribe(data => {temp = data});
        temp.push(val.quiz);
        this.backend.quizzes_list.next(temp);
        if(val.success === true){
          alert("Quiz with the name " + val.quiz.quiz_name + " has been created!");
        }
      })
    }
}
