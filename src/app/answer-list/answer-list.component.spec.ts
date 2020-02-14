import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnswerListComponent } from './answer-list.component';
import { AnswersService } from '../answers.service';
import Answer from '../Answer';

describe('AnswerListComponent', () => {
  let component: AnswerListComponent;
  let fixture: ComponentFixture<AnswerListComponent>;
  let expectedIds = ['aaa', 'bbb'];
  let mockAnswers: Answer[] = [
    {  
      _id: 'aaa',
      AnswerTitle: 'MockTitle a',
      AnswerAuthor: 'MockAuthor a',
      AnswerUrl: 'MockUrl',
      AnswerBlurb: 'lorem impsum',
      AnswerTags: ['mock tag a']
    }, 
    {  
      _id: 'bbb',
      AnswerTitle: 'MockTitle b',
      AnswerAuthor: 'MockAuthor b',
      AnswerUrl: 'MockUrlb',
      AnswerBlurb: 'lorem impsumb',
      AnswerTags: ['mock tag b']
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
    component.answers = mockAnswers;
    fixture.detectChanges();
  });

  it('should have an answers array', () => {
    expect(component.answers).toBeTruthy();
  });

  it('should have an answerIds array input', () => {
    expect(component.answerIds).toEqual(expectedIds);
  });

  it('should show the answer title and author', () => {
    let compiled = fixture.debugElement.nativeElement;
    let firstExpectedString: String = mockAnswers[0].AnswerTitle + ' - ' + mockAnswers[0].AnswerAuthor;
    let secondExpectedString: String = mockAnswers[1].AnswerTitle + ' - ' + mockAnswers[1].AnswerAuthor;
    expect(compiled.querySelectorAll('.answerItem').length).toEqual(mockAnswers.length);
    expect(compiled.querySelectorAll('.answerItem')[0].innerText).toEqual(firstExpectedString);
    expect(compiled.querySelectorAll('.answerItem')[1].innerText).toEqual(secondExpectedString);
  });

  it('should link via the answer title', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('a').length).toEqual(mockAnswers.length);
    expect(compiled.querySelectorAll('a')[0].innerText).toEqual(mockAnswers[0].AnswerTitle);
    expect(compiled.querySelectorAll('a')[1].innerText).toEqual(mockAnswers[1].AnswerTitle);
  });


});

