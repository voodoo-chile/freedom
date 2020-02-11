import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { QuestionEditComponent } from './question-edit.component';
import Question from '../Question';

describe('QuestionEditComponent', () => {
  let component: QuestionEditComponent;
  let fixture: ComponentFixture<QuestionEditComponent>;
  let mockQuestion: Question = {
      _id: 'a1a1',
      QuestionText: 'Mock question text',
      QuestionTags: ['mockTag1', 'mockTag2'],
      QuestionAnswers: ['aaa', 'bbb'],
      answerTitles: ['title2', 'title2']
    };
  let mockAnswers = [{
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
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ QuestionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionEditComponent);
    component = fixture.componentInstance;
    component.question = mockQuestion; 
    component.answers = mockAnswers;
    component.createForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a question object', () => {
    expect(component.question).toEqual(mockQuestion);
  });

  it('should have an answers array', () => {
    expect(component.answers).not.toBe(null);
  });  

  it('should have a question form', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  describe('question form', () => {
    let compiled

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    });

    it('should have a QuestionText input', () => {
      expect(compiled.querySelector('#questionTextInput')).toBeTruthy();
    });

    it('should have a QuestionTags input', () => {
      expect(compiled.querySelector('#questionTagsInput')).toBeTruthy();
    });

    it('should have an answers list', () => {
      expect(compiled.querySelector('#answersList')).toBeTruthy();
    });

  });

});
