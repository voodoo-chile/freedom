import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  uri = 'http://localhost:4000/questions';

  constructor(private http: HttpClient, private router: Router) { }

  addQuestion(QuestionText, QuestionAnswers, QuestionCategories) {
    const obj = {
      QuestionText, 
      QuestionAnswers, 
      QuestionCategories
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => this.router.navigate(['questions']));
  }

  getQuestions() {
    return this.http.get(`${this.uri}`);
  } 

  getQuestion(id) {
    return this
             .http
             .get(`${this.uri}/${id}`);
  }

  editQuestion(id) {
    return this
             .http
             .get(`${this.uri}/edit/${id}`);
  }

  updateQuestion(QuestionText, QuestionAnswers, QuestionCategories, id) {
    const obj = {
      QuestionText,
      QuestionAnswers,
      QuestionCategories
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => this.router.navigate(['questions']));
  }

  deleteQuestion(id) {
    return this
             .http
             .get(`${this.uri}/delete/${id}`);
  }

}
