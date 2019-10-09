import { Component, OnInit } from '@angular/core';
import Answer from '../Answer';
import { AnswersService } from '../answers.service'

@Component({
  selector: 'app-answer-get',
  templateUrl: './answer-get.component.html',
  styleUrls: ['./answer-get.component.css']
})
export class AnswerGetComponent implements OnInit {

  answers: Answer[];

  constructor(private as: AnswersService) { }

  deleteAnswer(id) { 
    this.as.deleteAnswer(id).subscribe(res => {
      this.answers.splice(id, 1);
    });
  }

  ngOnInit() {
    this.as
      .getAnswers()
      .subscribe((data: Answer[]) => {
        this.answers = data;
    });
  }

}
