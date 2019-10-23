import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { QuestionsService } from '../questions.service';
import Answer from '../Answer';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {

  angForm: FormGroup;
  answers: Answer[];

  constructor(private fb: FormBuilder, 
              private qs: QuestionsService, 
              private as: AnswersService) {     
  }

  createForm() {
    const formControls = this.answers.map(control => new FormControl(false));
    this.angForm = this.fb.group({
      QuestionText: ['', Validators.required ],
      AnswersArray: new FormArray(formControls),
      QuestionTags: ['']

    });
  }

  addQuestion() {
    const selectedAnswers = this.angForm.value.AnswersArray
      .map((checked,index) => checked ? this.answers[index]._id : null)
      .filter(value => value !== null);
    const categories = this.angForm.value.QuestionTags.split(",").map((category) => {
      return category.trim()
    });
    this.qs.addQuestion(this.angForm.value.QuestionText, selectedAnswers, categories);
  }

  ngOnInit() {
    this.as
      .getAnswers()
      .subscribe((data: Answer[]) => {
        this.answers = data;
        this.createForm();
      });
  }

}
