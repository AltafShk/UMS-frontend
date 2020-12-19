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

  public students_list = new BehaviorSubject("");
  public students_list_share = this.students_list.asObservable();


  initialData(){
    var data;
    data = this.http.get(this.rootURL + "/init");
    return data;
  }

  getUser(token){
    var data;
    data = this.http.get(this.rootURL + "/users/autheduser", {headers: {Authorization: `Bearer ${token}`}});
    console.log("herererer", data);
    return data;
  }

  getStudents(){
    var data;
    data = this.http.get(this.rootURL + "/users");
    return data;
  }

  createQuiz(quiz_name, total_marks, course_name, details, token){
    var data;
    data = this.http.post(this.rootURL + '/quizzes/addquiz', {quiz_name, total_marks, course_name, details}, {headers: {Authorization: `Bearer ${token}`}})
    return data;
  }

  getQuizzesFaculty(token){
    var data;
    data = this.http.get(this.rootURL + '/quizzes', {headers: {Authorization: `Bearer ${token}`}})
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
    console.log(course_id)
    data = this.http.get(this.rootURL + "/quizzes/" + course_id, {headers: {Authorization: `Bearer ${token}`}})
    return data;
  }
  
  getSubmissions(quiz_id, token){
    console.log(quiz_id, token)
    var data;
    data = this.http.get(this.rootURL + "/grades/quiz/" + quiz_id, {headers: {Authorization: `Bearer ${token}` }})
    return data;
  }

  lockingQuiz(quiz_id, token){
    console.log(token)
    var data;
    data = this.http.put(this.rootURL + "/quizzes/endquiz", {quiz_id} , {headers: {Authorization: `Bearer ${token}` }})
    return data;
  }

  updateGrade(obtained_marks, student_id, quiz_id, course_id, token){
    var data;
    data = this.http.put(this.rootURL + "/grades/setgrade", {obtained_marks, student_id, quiz_id, course_id}, {headers: {Authorization: `Bearer ${token}` }})
    return data;
  }

  getStudentgrades(course_id, token){
    var data;
    data = this.http.get(this.rootURL + "/grades/studentgrades/" + course_id, {headers: {Authorization:  `Bearer ${token}`}})
    return data;
  }

  sendFile(formData, course_id, quiz_id, token){
    console.log(formData, course_id, quiz_id, token)
    var data;
    data = this.http.post(this.rootURL + '/grades/' + course_id + '/' +  quiz_id, formData, {
      headers: {Authorization: `Bearer ${token}`},
      reportProgress: true,
      observe: 'events',
      // "contentType": false,
      // "processData": false
    })
    return data;
  }
}
