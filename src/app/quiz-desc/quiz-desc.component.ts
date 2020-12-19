import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute, Router, NavigationStart } from '@angular/router'
import { BackendService } from '../backend.service';


@Component({
  selector: 'app-quiz-desc',
  templateUrl: './quiz-desc.component.html',
  styleUrls: ['./quiz-desc.component.css']
})
export class QuizDescComponent implements OnInit {

  private routeSub: Subscription;
  

  course_name: String;
  course_id: any;
  quiz: any;
  fileUpload: any;

  notyetsubmitted = true;
  submitted = false;

  constructor(private router:Router, private route: ActivatedRoute, private backend: BackendService) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];
    });

    var id;
    this.backend.getCourses(localStorage.getItem("token")).subscribe(data => {
      for (let index = 0; index < data.courses.length; index++) {
        var element = data.courses[index];
        if(element.course_name === this.course_name){
          id = element._id;
          this.course_id = id;
        }
      }
    })


    this.quiz = history.state;
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  submitQuiz(){
    console.log(this.fileUpload)

    var formdata: FormData = new FormData();
    formdata.append('pdfFile', this.fileUpload, this.fileUpload.name );
    this.backend.sendFile(formdata, this.course_id, this.quiz._id, localStorage.getItem("token")).subscribe(data => console.log(data))

    this.notyetsubmitted = false;
    this.submitted = true;
  }

  

  onChange(event){
    console.log(event.target.files)
    this.fileUpload = event.target.files[0]
  }

}
