import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input() course;
  // @Output() courseChanged = new EventEmitter<{course: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  openCoursePage() {

  }

}
