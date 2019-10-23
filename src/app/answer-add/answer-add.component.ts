import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-answer-add',
  templateUrl: './answer-add.component.html',
  styleUrls: ['./answer-add.component.css']
})
export class AnswerAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private as: AnswersService) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      AnswerTitle: ['', Validators.required ],
      AnswerAuthor: ['', Validators.required ],
      AnswerUrl: ['', Validators.required ],
      AnswerBlurb: ['', Validators.required ],
      AnswerTags: ['']
    })
  }

  addAnswer(AnswerTitle, AnswerAuthor, AnswerUrl, AnswerBlurb, AnswerTags) {
    this.as.addAnswer(AnswerTitle, AnswerAuthor, AnswerUrl, AnswerBlurb, AnswerTags);
  }

  ngOnInit() {
  }

}
