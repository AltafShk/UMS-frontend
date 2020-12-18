import { Component ,OnInit } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'university-management-system';

  constructor(private backend: BackendService){}

  ngOnInit(){
    this.backend.initialData().subscribe(val => console.log(val));
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
