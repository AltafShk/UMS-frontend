import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-available',
  templateUrl: './quiz-available.component.html',
  styleUrls: ['./quiz-available.component.css']
})
export class QuizAvailableComponent implements OnInit {

  @Input() quiz: Object;
  @Input() course_name: String;

  constructor() { }

  ngOnInit(): void {
  }

}
