import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-coursehome',
  templateUrl: './coursehome.component.html',
  styleUrls: ['./coursehome.component.css']
})
export class CoursehomeComponent implements OnInit {

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
