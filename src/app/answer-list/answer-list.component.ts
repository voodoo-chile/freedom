import { Component, OnInit, Input } from '@angular/core';
import Answer from '../Answer';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {

  answers: Answer[];

  @Input() answerIds: string[];

  constructor(private as: AnswersService) {
    this.answers = [];
  }

  ngOnInit() {
    this.answerIds.forEach((id) => {
      this.as.getAnswer(id)
        .subscribe((data: Answer) => {
          this.answers.push(data);
        });
    });
  }

}
