import { Component ,OnInit } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'university-management-system';
  user: any;
  courses: any;

  constructor(private backend: BackendService){}

  ngOnInit(){
    this.backend.initialData().subscribe(val => console.log(val));
    if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== undefined && localStorage.getItem("token") !== "" )
    {
      console.log("helloo");
      
      this.backend.getUser(localStorage.getItem("token")).subscribe(val => {console.log("hellssssoo", val);this.user = val.user; } );
  
      
    }

    setTimeout( () => {
      this.backend.getStudents().subscribe(val => {
        this.backend.students_list.next(val);
      })
}, 1000);

setTimeout(() => {
  this.backend.curr_user.next(this.user);
}, 1000);

setTimeout( () => {
  this.backend.curr_user_share.subscribe(val => this.user = val)
}, 1000);

    
    //this.backend.addCourses().subscribe(val => console.log(val));
  }

  tokenPresent(){
    var token = localStorage.getItem("token");
    if(token !== "" && token !== undefined && token !== null){
      return true;
    }
    return false;
  }

  tokenAbsent(){
    var token = localStorage.getItem("token");
    if(token === "" || token === undefined || token === null){
      return true;
    }
    return false;
  }
}
