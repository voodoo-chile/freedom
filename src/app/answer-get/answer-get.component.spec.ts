import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { AnswerGetComponent } from './answer-get.component';

import Answer from '../Answer';

describe('AnswerGetComponent', () => {
  let component: AnswerGetComponent;
  let fixture: ComponentFixture<AnswerGetComponent>;

  let mockAnswers: Answer[] = [{
    _id: 'aaa',
    AnswerTitle: 'Answer 1 Title',
    AnswerAuthor: 'Answer 1 Author',
    AnswerUrl: 'https://answers.com',
    AnswerBlurb: 'lorem text',
    AnswerTags: ['answer', 'first']
  }, 
  {
    _id: 'bbb',
    AnswerTitle: 'Answer 2 Title',
    AnswerAuthor: 'Answer 2 Author',
    AnswerUrl: 'https://answers.com',
    AnswerBlurb: 'lorem text',
    AnswerTags: ['answer', 'second']
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ AnswerGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerGetComponent);
    component = fixture.componentInstance;
    component.answers = mockAnswers;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has an answers array', () => {
    expect(component.answers).not.toBe(null);
    expect(component.answers).toEqual(mockAnswers);
  });

  it('has cards for each answer', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.card').length).toEqual(mockAnswers.length);
  });

  
});
