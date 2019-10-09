import { Component, OnInit } from '@angular/core';
import Question from '../Question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-question-get',
  templateUrl: './question-get.component.html',
  styleUrls: ['./question-get.component.css']
})
export class QuestionGetComponent implements OnInit {

  questions: Question[];

  constructor(private qs: QuestionsService) { }

  deleteQuestion(id) { 
    this.qs.deleteQuestion(id).subscribe(res => {
      this.questions.splice(id, 1);
    });
  }

  ngOnInit() {
    this.qs
      .getQuestions()
      .subscribe((data: Question[]) => {
        this.questions = data;
    });
  }

}
