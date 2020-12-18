import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  rootURL = '/api';

  public curr_user = new BehaviorSubject("");
  public curr_user_share = this.curr_user.asObservable();

  public curr_course = new BehaviorSubject("");
  public curr_course_share = this.curr_course.asObservable();
  
  public token = new BehaviorSubject("");
  public token_share = this.token.asObservable();

  public courses_list = new BehaviorSubject("");
  public courses_list_share = this.courses_list.asObservable();

  public grades_list = new BehaviorSubject("");
  public grades_list_share = this.grades_list.asObservable();

  public quizzes_list = new BehaviorSubject("");
  public quizzes_list_share = this.quizzes_list.asObservable();


  initialData(){
    var data;
    data = this.http.get(this.rootURL + "/init");
    return data;
  }


  addCourses(){
    var data;
    data = this.http.get(this.rootURL + "/addcourses");
    return data;
  }


  loginAccount(username, password){
    var data;
    data = this.http.post(this.rootURL + "/users/login", {username, password})
    return data;
  }

  getCourses(token){
    var data;
    data = this.http.get(this.rootURL + "/courses", {headers: {Authorization: `Bearer ${token}`}})
    return data;
  }

  getGrades(token){
    var data;
    data = this.http.get(this.rootURL + "/grades", {headers: {Authorization: `Bearer ${token}`}})
    return data;
  }

  getQuizzes(course_id, token){
    console.log(course_id, token);
    var data;
    data = this.http.get(this.rootURL + "/quizzes/" + course_id, {headers: {Authorization: `Bearer ${token}`}})
    return data;
  }
}
