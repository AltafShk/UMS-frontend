import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username: String;
  password: String;
  token: String;

  constructor(private backend: BackendService, private router: Router) { }

  login(){
    console.log("HERE")
    this.backend.loginAccount(this.username, this.password).subscribe(val => {
      this.backend.curr_user.next(val.user);
      this.backend.token.next(val.token);
      localStorage.setItem("token", val.token);
      this.router.navigateByUrl('/courses');
    });
  }
}
