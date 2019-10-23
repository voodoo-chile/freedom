import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  uri = 'http://localhost:4000/answers';

  constructor(private http: HttpClient, private router: Router) { }

  addAnswer(AnswerTitle, AnswerAuthor, AnswerUrl, AnswerBlurb, AnswerTags){
    const obj = {
      AnswerTitle, 
      AnswerAuthor,
      AnswerUrl,
      AnswerBlurb, 
      AnswerTags
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => this.router.navigate(['answers']));
  }

  getAnswers() {
    return this.http.get(`${this.uri}`);
  } 

  getAnswer(id) {
    return this
             .http
             .get(`${this.uri}/${id}`);
  }

  editAnswer(id) {
    return this
             .http
             .get(`${this.uri}/edit/${id}`);
  }

  updateAnswer(AnswerTitle, AnswerAuthor, AnswerUrl, AnswerBlurb, AnswerTags, id) {
    const obj = {
      AnswerTitle, 
      AnswerAuthor,
      AnswerUrl, 
      AnswerBlurb, 
      AnswerTags
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => this.router.navigate(['answers']));
  }

  deleteAnswer(id) {
    return this
             .http
             .get(`${this.uri}/delete/${id}`);
  }

}
