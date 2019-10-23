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
      AnswerAuthor: ['', Validators.required ],
      AnswerUrl: ['', Validators.required ],
      AnswerBlurb: ['', Validators.required],
      AnswerTags: ['']
    });
  }

  updateAnswer(AnswerTitle, AnswerAuthor, AnswerUrl, AnswerBlurb, AnswerTags, id) {
    this.route.params.subscribe(params => {
      const tags = AnswerTags.split(",").map((tag) => {
        return tag.trim()
      });
      this.as.updateAnswer(AnswerTitle, AnswerAuthor, AnswerUrl, AnswerBlurb, tags, params.id);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.as.editAnswer(params['id']).subscribe(res => {
        this.answer = res;
        this.angForm.get('AnswerTitle').setValue(this.answer.AnswerTitle);
        this.angForm.get('AnswerAuthor').setValue(this.answer.AnswerAuthor);
        this.angForm.get('AnswerUrl').setValue(this.answer.AnswerUrl);
        this.angForm.get('AnswerBlurb').setValue(this.answer.AnswerBlurb);
        this.angForm.get('AnswerTags').setValue(this.answer.AnswerTags.join(", "));
      });
    });
  }

}
