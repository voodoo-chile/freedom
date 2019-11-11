import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { QuestionGetComponent } from './question-get.component';
import { AnswerListComponent } from '../answer-list/answer-list.component';

import Question from '../Question';

describe('QuestionGetComponent', () => {
  let component: QuestionGetComponent;
  let fixture: ComponentFixture<QuestionGetComponent>;

  let mockQuestions: Question[] = [{
    QuestionText: 'Mock question text',
    QuestionTags: ['mockTag1', 'mockTag2'],
    QuestionAnswers: ['aaa', 'bbb'],
    answerTitles: ['title2', 'title2']
  },
  {
    QuestionText: 'Mock question text2',
    QuestionTags: ['mockTag1', 'mockTag2'],
    QuestionAnswers: ['aaa', 'bbb'],
    answerTitles: ['title1', 'title2']
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        QuestionGetComponent,
        AnswerListComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionGetComponent);
    component = fixture.componentInstance;
    component.questions = mockQuestions;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has a questions array', () => {
    expect(component.questions).not.toBe(null);
    expect(component.questions).toEqual(mockQuestions);
  });

  it('has cards for each question', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.questionCard').length).toEqual(mockQuestions.length);
  });

  it('has an answer-list component on every card', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-answer-list').length).toEqual(mockQuestions.length);
    const firstCard = compiled.querySelectorAll('.questionCard')[0];
    expect(firstCard.querySelectorAll('app-answer-list').length).toEqual(1);
  });

});
