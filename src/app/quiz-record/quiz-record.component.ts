import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-record',
  templateUrl: './quiz-record.component.html',
  styleUrls: ['./quiz-record.component.css']
})
export class QuizRecordComponent implements OnInit {

  @Input() quiz: any;

  constructor() { }

  ngOnInit(): void {
  }

}
