import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnswerListComponent } from './answer-list.component';
import { AnswersService } from '../answers.service';

describe('AnswerListComponent', () => {
  let component: AnswerListComponent;
  let fixture: ComponentFixture<AnswerListComponent>;
  let expectedIds = ['aaa', 'bbb'];
  let mockAnswers = [
    {  
      _id: 'aaa',
      AnswerTitle: 'MockTitle',
      AnswerAuthor: 'MockAuthor',
      AnswerUrl: 'MockUrl',
      AnswerBlurb: 'lorem impsum',
      AnswerTags: 'mock tag '
    }, 
    {  
      _id: 'bbb',
      AnswerTitle: 'MockTitleb',
      AnswerAuthor: 'MockAuthorb',
      AnswerUrl: 'MockUrlb',
      AnswerBlurb: 'lorem impsumb',
      AnswerTags: 'mock tag b'
    }
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
        ],
      declarations: [ AnswerListComponent ],
      providers: [ AnswersService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerListComponent);
    component = fixture.componentInstance;
    component.answerIds = expectedIds;
    fixture.detectChanges();
  });

  it('should have an answers array', () => {
    expect(component.answers).toEqual([]);
  });

  it('should have an answerIds array input', () => {
    expect(component.answerIds).toEqual(expectedIds);
  });


});

