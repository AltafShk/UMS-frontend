import { Component, OnInit } from '@angular/core';
import '@angular/compiler';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  courses:any[]=['Linear Algebra', 'Calculus', 'Algorithms', 'PAMSA', 'Web & App Dev'];
  constructor() { }

  ngOnInit(): void {
  }

  onCourseChanged(){

  }

}
