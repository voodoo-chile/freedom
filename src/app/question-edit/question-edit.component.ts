import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {

  angForm: FormGroup;
  question: any = {};

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private qs: QuestionsService, 
              private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      QuestionText: ['', Validators.required ],
      QuestionAnswers: [''],
      QuestionCategories: ['']
    });
  }

  updateQuestion(QuestionText, QuestionAnswers, QuestionCategories, id) {
    this.route.params.subscribe(params => {
      this.qs.updateQuestion(QuestionText, QuestionAnswers, QuestionCategories, params.id);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.qs.editQuestion(params['id']).subscribe(res => {
        this.question = res;
        this.angForm.get('QuestionText').setValue(this.question.QuestionText);
      });
    });
  }

}
