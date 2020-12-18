import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-courseattendance',
  templateUrl: './courseattendance.component.html',
  styleUrls: ['./courseattendance.component.css']
})
export class CourseattendanceComponent implements OnInit {


  records = [{date: "September/6/2020", present: true},
  {date: "September/7/2020", present: true},
  {date: "September/8/2020", present: true},
  {date: "September/9/2020", present: true},
  {date: "September/10/2020", present: false},
  {date: "September/11/2020", present: false},
  {date: "September/12/2020", present: false},
  {date: "September/13/2020", present: true},
  {date: "September/14/2020", present: true},
  {date: "September/16/2020", present: false},
  {date: "September/17/2020", present: false},
  {date: "September/18/2020", present: false}]

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute) { }

  course_name: String;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
    });

    //TODO: get this students attendance records
    
    
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
