import { Component, Input, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-quiz-available',
  templateUrl: './quiz-available.component.html',
  styleUrls: ['./quiz-available.component.css']
})
export class QuizAvailableComponent implements OnInit {

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

}
