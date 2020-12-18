import { Component, OnInit, Input } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

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
