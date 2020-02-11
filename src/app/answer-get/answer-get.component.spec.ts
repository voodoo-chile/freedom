import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Rx';


import { AnswerGetComponent } from './answer-get.component';

import Answer from '../Answer';
import { AnswersService } from '../answers.service';

describe('AnswerGetComponent', () => {
  let component: AnswerGetComponent;
  let fixture: ComponentFixture<AnswerGetComponent>;
  let answersService: AnswersService;

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
      declarations: [ AnswerGetComponent ],
      providers: [AnswersService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerGetComponent);
    component = fixture.componentInstance;
    component.answers = mockAnswers.slice(0);
    answersService = TestBed.get(AnswersService)
    fixture.detectChanges();
  });

  it('has an answers array', () => {
    expect(component.answers).not.toBe(null);
    expect(component.answers).toEqual(mockAnswers);
  });

  it('has a deleteAnswer function', () => {
    let deleteSpy = spyOn<any>(answersService, 'deleteAnswer').and.returnValue(Observable.of('success'));
    expect(component.answers[0]).toEqual(mockAnswers[0]);
    let id = mockAnswers[0]._id;
    component.deleteAnswer(id);
    expect(component.answers).toEqual([mockAnswers[1]]);
    expect(deleteSpy).toHaveBeenCalled();
  });

  it('has cards for each answer', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.card').length).toEqual(mockAnswers.length);
  });

  describe('cards', () => {
    let compiled;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    });
    
    it('should show the answer author', () => {
      let firstId = '#answerAuthor-' + mockAnswers[0]._id;
      let secondId = '#answerAuthor-' + mockAnswers[1]._id;
      expect(compiled.querySelector(firstId)).toBeTruthy();
      expect(compiled.querySelector(firstId).innerText).toEqual(mockAnswers[0].AnswerAuthor);
      expect(compiled.querySelector(secondId)).toBeTruthy();
      expect(compiled.querySelector(secondId).innerText).toEqual(mockAnswers[1].AnswerAuthor);
    });
    
    it('should show the answer title', () => {
      let firstId = '#answerTitle-' + mockAnswers[0]._id;
      let secondId = '#answerTitle-' + mockAnswers[1]._id;
      expect(compiled.querySelector(firstId)).toBeTruthy();
      expect(compiled.querySelector(firstId).innerText).toEqual(mockAnswers[0].AnswerTitle);
      expect(compiled.querySelector(secondId)).toBeTruthy();
      expect(compiled.querySelector(secondId).innerText).toEqual(mockAnswers[1].AnswerTitle);
    });
    
    it('should show the answer url', () => {
      let firstId = '#answerUrl-' + mockAnswers[0]._id;
      let secondId = '#answerUrl-' + mockAnswers[1]._id;
      expect(compiled.querySelector(firstId)).toBeTruthy();
      expect(compiled.querySelector(firstId).innerText).toEqual(mockAnswers[0].AnswerUrl); 
      expect(compiled.querySelector(secondId)).toBeTruthy();
      expect(compiled.querySelector(secondId).innerText).toEqual(mockAnswers[1].AnswerUrl);
    });
    
    it('should show the answer blurb', () => {
      let firstId = '#answerBlurb-' + mockAnswers[0]._id;
      let secondId = '#answerBlurb-' + mockAnswers[1]._id;
      expect(compiled.querySelector(firstId)).toBeTruthy();
      expect(compiled.querySelector(firstId).innerText).toEqual(mockAnswers[0].AnswerBlurb); 
      expect(compiled.querySelector(secondId)).toBeTruthy();
      expect(compiled.querySelector(secondId).innerText).toEqual(mockAnswers[1].AnswerBlurb);
    });
    
    it('should show the answer tags', () => {
      let firstId = '#answerTags-' + mockAnswers[0]._id;
      let secondId = '#answerTags-' + mockAnswers[1]._id;
      expect(compiled.querySelector(firstId)).toBeTruthy();
      expect(compiled.querySelector(secondId)).toBeTruthy();
    });
    
    it('should have an edit answer button', () => {
      let firstId = '#answerEditButton-' + mockAnswers[0]._id;
      let secondId = '#answerEditButton-' + mockAnswers[1]._id;
      expect(compiled.querySelector(firstId)).toBeTruthy();
      expect(compiled.querySelector(secondId)).toBeTruthy();
    });
    
    it('should have an edit delete button', () => {
      let firstId = '#answerDeleteButton-' + mockAnswers[0]._id;
      let secondId = '#answerDeleteButton-' + mockAnswers[1]._id;
      expect(compiled.querySelector(firstId)).toBeTruthy();
      expect(compiled.querySelector(secondId)).toBeTruthy();
    });

  });

  
});
