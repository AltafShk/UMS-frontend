import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course_name: string = 'Calculus';
  constructor() { }

  ngOnInit(): void {
  }

}
