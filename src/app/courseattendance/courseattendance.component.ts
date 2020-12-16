import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-courseattendance',
  templateUrl: './courseattendance.component.html',
  styleUrls: ['./courseattendance.component.css']
})
export class CourseattendanceComponent implements OnInit {

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute) { }

  course_name: String;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
    });
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
