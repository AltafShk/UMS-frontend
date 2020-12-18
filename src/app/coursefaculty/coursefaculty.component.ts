import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-coursefaculty',
  templateUrl: './coursefaculty.component.html',
  styleUrls: ['./coursefaculty.component.css']
})
export class CoursefacultyComponent implements OnInit {

  course_name: string;
  private routeSub: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
