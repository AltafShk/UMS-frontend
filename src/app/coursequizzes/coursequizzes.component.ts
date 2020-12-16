import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-coursequizzes',
  templateUrl: './coursequizzes.component.html',
  styleUrls: ['./coursequizzes.component.css']
})
export class CoursequizzesComponent implements OnInit {

  quizzes = Array<any>();

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute) {}

  course_name: String;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
      console.log(this.course_name);
    });

    for (let index = 0; index < 4; index++) {
      var d = new Date();
        var month = d.getMonth();
        var day = d.getDay();
        let map = new Map<Number, string>();

        map.set(1, "Jan"); 
        map.set(2, "Feb");
        map.set(3, "Mar");
        map.set(4, "Apr");
        map.set(5, "May");
        map.set(6, "Jun");
        map.set(7, "Jul");
        map.set(8, "Aug");
        map.set(9, "Sep");
        map.set(10, "Oct");
        map.set(11, "Nov");
        map.set(11, "Dec");

      var obj = {name: "Quiz " + index.toString(), duedate: map.get(month) + " " +  day.toString() , total: 10 , desc: "Write the sum of 2 + 2"} //TODO: add available attribute from backend
      
      this.quizzes[index] = obj;
    }
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
