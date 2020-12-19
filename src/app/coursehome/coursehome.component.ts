import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-coursehome',
  templateUrl: './coursehome.component.html',
  styleUrls: ['./coursehome.component.css']
})
export class CoursehomeComponent implements OnInit {

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private backend: BackendService) { }

  course_name: any;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
    });

    var all_courses;
    var id;
    this.backend.courses_list_share.subscribe(val => {
      for (let index = 0; index < val.length; index++) {
        var element: any;
         element = val[index];
        if(element.course_name === this.course_name){
          id = element._id;
          break
        }
      }
    });

    
    setTimeout( () => {
            this.backend.getQuizzes(id, localStorage.getItem("token")).subscribe(val => {
              this.backend.quizzes_list.next(val.quizzes);
            })
          
      }, 1000);
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
