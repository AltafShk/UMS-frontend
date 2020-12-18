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
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
