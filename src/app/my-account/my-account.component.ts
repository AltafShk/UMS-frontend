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
    this.backend.curr_user_share.subscribe(val => {console.log(val)})
  }

  logout(){
    localStorage.setItem("token", "");
  }

}
