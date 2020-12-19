import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-coursefacultygrades',
  templateUrl: './coursefacultygrades.component.html',
  styleUrls: ['./coursefacultygrades.component.css']
})
export class CoursefacultygradesComponent implements OnInit {
  

  records: any;

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private backend: BackendService) { }

  course_name: String;
  quiz: any;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.course_name = params['id'];

      this.routeSub = this.route.params.subscribe(params => {
        this.course_name = params['id'];
      });
      this.quiz = history.state;

      this.backend.getSubmissions(this.quiz._id, localStorage.getItem("token")).subscribe(data => {
        console.log(data)
        var submissions: any = data.submission;
        var students: any = data.students;
        var temp = [];
        this.records = [];
        for (let index = 0; index < students.length; index++) {
          var element = students[index];
          for (let index2 = 0; index2 < submissions.length; index2++) {
            var element2 = submissions[index2];
            if(element._id === element2.student._id){
              console.log("pushing")
              temp.push(element2)
              break;
            }
          }
        }
        this.records = temp;
      })
    });

    
    
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
