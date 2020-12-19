import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../backend.service';

function setCharAt(str,index,chr) {
  if(index > str.length-1) return str;
  return str.substring(0,index) + chr + str.substring(index+1);
}

@Component({
  selector: 'app-faculty-gradequiz',
  templateUrl: './faculty-gradequiz.component.html',
  styleUrls: ['./faculty-gradequiz.component.css']
})
export class FacultyGradequizComponent implements OnInit {

  @Input() studentdata: any;

  path: any;
  Score: any;

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    console.log(this.studentdata)
    if(this.studentdata.obtained_marks){
      this.Score = this.studentdata.obtained_marks;
    }

    this.path = this.studentdata.submitted_file;

    if (this.path){
      
      var index = this.path.indexOf("\\")
    this.path = setCharAt(this.path, index, "/")
    console.log(this.path)
  }
  }

  updateMarks(){
    this.backend.updateGrade(this.Score, this.studentdata.student._id, this.studentdata.quiz._id, this.studentdata.quiz.course , localStorage.getItem("token"))
    .subscribe(data => console.log(data))

    alert("Grade Updated!");
    
  }


}
