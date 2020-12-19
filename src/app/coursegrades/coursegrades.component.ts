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
  submissions: any;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
    });

    var id;
    this.backend.courses_list_share.subscribe(val => {
      for (let index = 0; index < val.length; index++) {
        var element: any;
         element = val[index];
         console.log(element.course_name, this.course_name)
        if(element.course_name === this.course_name){
          id = element._id;
          break
        }
      }
      this.course_id = id;
    });

    this.backend.getStudentgrades( this.course_id, localStorage.getItem("token")).subscribe(data => {
      console.log(data)
      this.submissions = data.submission})
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
