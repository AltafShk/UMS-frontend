import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-coursequizzes',
  templateUrl: './coursequizzes.component.html',
  styleUrls: ['./coursequizzes.component.css']
})
export class CoursequizzesComponent implements OnInit {

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
