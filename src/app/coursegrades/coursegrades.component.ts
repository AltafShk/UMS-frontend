import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-coursegrades',
  templateUrl: './coursegrades.component.html',
  styleUrls: ['./coursegrades.component.css']
})
export class CoursegradesComponent implements OnInit {


  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private backend: BackendService) { }

  course_name: any;
  quizzes: any;
  courses_list:any;
  course_id: any;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
    });
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
