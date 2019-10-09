import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Question from '../Question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-question-show',
  templateUrl: './question-show.component.html',
  styleUrls: ['./question-show.component.css']
})
export class QuestionShowComponent implements OnInit {

  question: any = {};

  constructor(private route: ActivatedRoute, 
              private qs: QuestionsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.qs.getQuestion(params['id']).subscribe(res => {
        this.question = res;
      });
    });
  }

}
