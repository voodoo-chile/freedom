import { Component, OnInit } from '@angular/core';
import Question from '../Question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-question-carousel',
  templateUrl: './question-carousel.component.html',
  styleUrls: ['./question-carousel.component.css']
})
export class QuestionCarouselComponent implements OnInit {

  questions: Question[];

  constructor(private qs: QuestionsService) { }

  ngOnInit() {
    this.qs
      .getQuestions()
      .subscribe((data: Question[]) => {
        var m = data.length, t, i;

        while (m) {
          i = Math.floor(Math.random() * m--);
          t = data[m];
          data[m] = data[i];
          data[i] = t;
        }

        
        this.questions = data
      });
  }

}
