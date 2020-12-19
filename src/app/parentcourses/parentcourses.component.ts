import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-parentcourses',
  templateUrl: './parentcourses.component.html',
  styleUrls: ['./parentcourses.component.css']
})
export class ParentcoursesComponent implements OnInit {

  user: any;

  constructor(private backend: BackendService) { 
    this.backend.curr_user_share.subscribe(val => {this.user = val});
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("inittttt")
    this.backend.curr_user_share.subscribe(val => {this.user = val; console.log(val)});
  }


    isStudent(){
      if(this.user.role === "student"){
        return true
      }
      return false;
    }

    isFaculty(){
      if(this.user.role === "teacher"){
        return true
      }
      return false;
    }

    isLoading(){
      if(this.user === null || this.user === undefined || this.user === ""){
        return true;
      }

      return false;
      
    }
}
