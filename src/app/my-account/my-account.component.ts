import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  user: any;

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    
    // if(localStorage.getItem("user") === null || localStorage.getItem("user") === undefined || localStorage.getItem("user") === ""){
      this.backend.curr_user_share.subscribe(val => {this.user = val; localStorage.setItem("user", val); console.log(val)})
    // }
    // else{
    //   this.user = localStorage.getItem("user");
    // }

      
  }

  logout(){
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
  }

}
