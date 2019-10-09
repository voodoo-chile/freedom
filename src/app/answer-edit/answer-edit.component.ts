import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-answer-edit',
  templateUrl: './answer-edit.component.html',
  styleUrls: ['./answer-edit.component.css']
})
export class AnswerEditComponent implements OnInit {

  angForm: FormGroup;
  answer: any = {};

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private as: AnswersService, 
              private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      AnswerTitle: ['', Validators.required ],
      AnswerUrl: ['', Validators.required ],
      AnswerBlurb: ['', Validators.required],
      AnswerTags: ['']
    });
  }

  updateAnswer(AnswerTitle, AnswerUrl, AnswerBlurb, AnswerTags, id) {
    this.route.params.subscribe(params => {
      this.as.updateAnswer(AnswerTitle, AnswerUrl, AnswerBlurb, AnswerTags, params.id);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.as.editAnswer(params['id']).subscribe(res => {
        this.answer = res;
        this.angForm.get('AnswerTitle').setValue(this.answer.AnswerTitle);
        this.angForm.get('AnswerUrl').setValue(this.answer.AnswerUrl);
      });
    });
  }

}
