import { Component, OnInit, Input } from '@angular/core';
import Answer from '../Answer';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-answer-show',
  templateUrl: './answer-show.component.html',
  styleUrls: ['./answer-show.component.css']
})
export class AnswerShowComponent implements OnInit {

  answer: any = {};

  @Input() id: string;

  constructor(private as: AnswersService) { }

  ngOnInit() {
    this.as.getAnswer(this.id).subscribe(res => {
      this.answer = res;
    });
  }

}
