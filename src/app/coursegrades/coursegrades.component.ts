import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-coursegrades',
  templateUrl: './coursegrades.component.html',
  styleUrls: ['./coursegrades.component.css']
})
export class CoursegradesComponent implements OnInit {


  private routeSub: Subscription;
  constructor(private route: ActivatedRoute) { }

  course_name: String;
  quizzes = Array<any>();     // TODO:change type any to object when retrieve from backend

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
    });

    for (let index = 0; index < 3; index++) {  // TODO:change this to actual data from backend
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

        var obj = {name: 'Quiz ' + (index+1).toString(), date: map.get(month) + " " +  day.toString(), score: Math.floor(Math.random() * 10), total: 10}
        this.quizzes[index] = obj;
    }
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
