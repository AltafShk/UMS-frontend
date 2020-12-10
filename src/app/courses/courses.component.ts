import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:any[]=['Linear Algebra', 'Calculus', 'Algorithms', 'PAMSA', 'Web & App Dev'];
  // @Output() courseChanged = new EventEmitter<{course: string}>();

  constructor() { } 

  ngOnInit(): void {
  }

  openCoursePage() {

  }

}
