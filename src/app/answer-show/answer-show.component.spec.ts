import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnswerShowComponent } from './answer-show.component';
import { AnswersService } from '../answers.service';
import Answer from '../Answer';

describe('AnswerShowComponent', () => {
  let component: AnswerShowComponent;
  let fixture: ComponentFixture<AnswerShowComponent>;

  let mockAnswer: Answer = {
    _id: 'aaa',
    AnswerTitle: 'Answer Title',
    AnswerAuthor: 'Answer Author',
    AnswerUrl: 'Answer URL',
    AnswerBlurb: 'lorem ipsum text',
    AnswerTags: ['Tag1', 'Tag2']
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
        ],
      declarations: [ AnswerShowComponent ],
      providers: [
        AnswersService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerShowComponent);
    component = fixture.componentInstance;
    component.answer = mockAnswer;
    fixture.detectChanges();
  });

  it('should have an answer', () => {
    expect(component.answer).not.toBe(null);
  });

  describe('display', () => {
    let compiled;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    });

    it('should link the answer title', () => {
      expect(compiled.querySelector('#answerTitleLink')).toBeTruthy();
      expect(compiled.querySelector('#answerTitleLink').innerText).toEqual(mockAnswer.AnswerTitle);
    });

    it('should show the answer author', () => {
      expect(compiled.querySelector('#answerAuthor')).toBeTruthy();
      expect(compiled.querySelector('#answerAuthor').innerText).toEqual(mockAnswer.AnswerAuthor);
    });

    it('should show the answer blurb', () => {
      expect(compiled.querySelector('#answerBlurb')).toBeTruthy();
      expect(compiled.querySelector('#answerBlurb').innerText).toEqual(mockAnswer.AnswerBlurb);
    });

    it('should show the answer tags', () => {
      expect(compiled.querySelectorAll('.answerTag').length).toEqual(mockAnswer.AnswerTags.length);
    });

  });

});
