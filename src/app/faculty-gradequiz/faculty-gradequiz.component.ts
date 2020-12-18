import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faculty-gradequiz',
  templateUrl: './faculty-gradequiz.component.html',
  styleUrls: ['./faculty-gradequiz.component.css']
})
export class FacultyGradequizComponent implements OnInit {

  @Input() studentdata: any;

  constructor() { }

  ngOnInit(): void {
  }

  downloadSubmission(){
    alert(this.studentdata.submission);

  }
}
