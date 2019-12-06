import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { QuestionAddComponent } from './question-add.component';

describe('QuestionAddComponent', () => {
  let component: QuestionAddComponent;
  let fixture: ComponentFixture<QuestionAddComponent>;
  let answers = [{
        _id: 'aaa',
        AnswerTitle: 'blah blah',
        AnswerAuthor: 'blah',
        AnswerUrl: 'url',
        AnswerBlurb: 'blbah',
        AnswerTags: ['tag', 'tag2']
      }];  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ QuestionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAddComponent);
    component = fixture.componentInstance;
    component.answers = answers;
    component.createForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an answers array', () => {
    expect(component.answers).not.toBe(null);
  });

  it('should have a question form', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  describe('question form', () => {
    let compiled;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    });

    it('has a QuestionText input', () => {
      expect(compiled.querySelector('#questionTextInput')).toBeTruthy();
    });

    it('has a QuestionTags input', () => {
      expect(compiled.querySelector('#questionTagsInput')).toBeTruthy();
    });

    it('has an answers list', () => {
      expect(compiled.querySelector('#answersList')).toBeTruthy();
    });
  });

});
