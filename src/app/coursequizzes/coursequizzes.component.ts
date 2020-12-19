import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-coursequizzes',
  templateUrl: './coursequizzes.component.html',
  styleUrls: ['./coursequizzes.component.css']
})
export class CoursequizzesComponent implements OnInit {

  quizzes: any;
  course_id: any;

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private backend: BackendService) {}

  course_name: any;

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
    });

    this.backend.quizzes_list_share.subscribe(val => {
      this.quizzes = [];
      for (let index = 0; index < val.length; index++) {
        var element: any = val[index]
        var lst = []
        if(element.available === true){
          console.log("LST: ", element)
          this.quizzes.push(element)
        }
        
      }
      //this.quizzes = lst
    })

    setTimeout( () => {
      console.log(id)
      this.backend.getQuizzes(id, localStorage.getItem("token")).subscribe(val => {
        this.backend.quizzes_list.next(val.quizzes);
      })
    
}, 1000);
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
