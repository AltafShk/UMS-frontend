import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-coursefacultygrades',
  templateUrl: './coursefacultygrades.component.html',
  styleUrls: ['./coursefacultygrades.component.css']
})
export class CoursefacultygradesComponent implements OnInit {
  

  studentdatas = [{name:"Pablo escobar", batch:"2022", date: "September/6/2020", submission:"asd", score:"5", total:10},
  {name:"John Travolta", batch:"2022", date: "September/6/2020", submission:"asd", score:"2", total:10},
  {name:"Ammar Khalid", batch:"2022", date: "September/6/2020", submission:"asd", score:"3", total:10},]

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute) { }

  course_name: String;
  quiz: any;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];

      this.routeSub = this.route.params.subscribe(params => {
        this.course_name = params['id'];
      });
      this.quiz = history.state;
    });

    
    
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
