import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '../questions.service';
import Answer from '../Answer';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {

  angForm: FormGroup;
  question: any = {};
  answers: Answer[];

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private qs: QuestionsService,
              private as: AnswersService, 
              private fb: FormBuilder) {

  }

  createForm() {
    const formControls = this.answers.map(control => new FormControl(this.question.QuestionAnswers.includes(control._id)));
    this.angForm = this.fb.group({
      QuestionText: ['', Validators.required ],
      AnswersArray: new FormArray(formControls),
      QuestionTags: ['']
    });
    this.angForm.get('QuestionText').setValue(this.question.QuestionText);
    this.angForm.get('QuestionTags').setValue(this.question.QuestionTags.join(", "));
  } 

  updateQuestion(QuestionText, QuestionAnswers, QuestionTags, id) {
    const selectedAnswers = this.angForm.value.AnswersArray
      .map((checked, index) => checked ? this.answers[index]._id : null)
      .filter(value => value !== null)
    this.route.params.subscribe(params => {
      const categories = this.angForm.value.QuestionTags.split(",").map((category) => {
        return category.trim()
      });
      this.qs.updateQuestion(this.angForm.value.QuestionText, selectedAnswers, categories, params.id);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.qs.editQuestion(params['id']).subscribe(res => {
        this.question = res;
        this.as
          .getAnswers()
          .subscribe((data: Answer[]) => {
            this.answers = data;
            this.createForm();
          });
      });
    });
  }

}
