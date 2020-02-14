import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { QuestionShowComponent } from './question-show.component';
import { AnswerShowComponent } from '../answer-show/answer-show.component';

describe('QuestionShowComponent', () => {
  let component: QuestionShowComponent;
  let fixture: ComponentFixture<QuestionShowComponent>;
  
  let mockQuestion = {
    QuestionText: 'this is a mock question',
    QuestionAnswers: ['aa1', 'aa2'],
    QuestionTags: ['mockTag', 'mockTag2']
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
        ],
      declarations: [ 
        QuestionShowComponent,
        AnswerShowComponent 
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionShowComponent);
    component = fixture.componentInstance;
    component.question = mockQuestion;
    fixture.detectChanges();
  });

  it('should have a question', () => {
    expect(component.question).not.toBe(null);
  });

  it('should show the question', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#questionText').innerHTML).toBe(mockQuestion.QuestionText);
  });

  it('should have an answer-show component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-answer-show')).not.toBe(null);
  });
  
});
