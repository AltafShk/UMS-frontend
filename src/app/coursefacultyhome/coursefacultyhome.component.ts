import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import {Subscription} from 'rxjs'


@Component({
  selector: 'app-coursefacultyhome',
  templateUrl: './coursefacultyhome.component.html',
  styleUrls: ['./coursefacultyhome.component.css']
})
export class CoursefacultyhomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private backend: BackendService) {}

  private routeSub: Subscription;
  course_name: any;

    ngOnInit(){
  this.routeSub = this.route.params.subscribe(params => {
    this.course_name = params['id'];
  });
}
  
}
