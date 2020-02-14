import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Rx';

import { QuestionGetComponent } from './question-get.component';
import { AnswerListComponent } from '../answer-list/answer-list.component';
import { QuestionsService } from '../questions.service';

import Question from '../Question';

describe('QuestionGetComponent', () => {
  let component: QuestionGetComponent;
  let fixture: ComponentFixture<QuestionGetComponent>;
  let questionsService: QuestionsService;

  let mockQuestions: Question[] = [{
    _id: 'a1a1',
    QuestionText: 'Mock question text',
    QuestionTags: ['mockTag1', 'mockTag2'],
    QuestionAnswers: ['aaa', 'bbb'],
    answerTitles: ['title2', 'title2']
  },
  {
    _id: 'b2b2',
    QuestionText: 'Mock question text2',
    QuestionTags: ['mockTag2'],
    QuestionAnswers: [],
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
      ],
      providers: [QuestionsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionGetComponent);
    component = fixture.componentInstance;
    component.questions = mockQuestions.slice(0);
    questionsService = TestBed.get(QuestionsService);
    fixture.detectChanges();
  });

  it('should have a questions array', () => {
    expect(component.questions).not.toBe(null);
    expect(component.questions).toEqual(mockQuestions);
  });

  it('should have a deleteQuestion method', () => {
    let deleteSpy = spyOn<any>(questionsService, 'deleteQuestion').and.returnValue(Observable.of('success'));
    expect(component.questions).toEqual(mockQuestions);
    let idToDelete = mockQuestions[0]._id;
    component.deleteQuestion(idToDelete);
    expect(component.questions).toEqual([mockQuestions[1]]);
    expect(deleteSpy).toHaveBeenCalled();
  });


  it('should have cards for each question', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.questionCard').length).toEqual(mockQuestions.length);
  });

  describe('cards', () => {
    let compiled;
    let firstCard;
    let secondCard;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
      firstCard = compiled.querySelectorAll('.questionCard')[0];
      secondCard = compiled.querySelectorAll('.questionCard')[1];
    });

    it('should show the question text', () => {
      expect(firstCard.querySelector('.questionTextLink')).toBeTruthy();
      expect(firstCard.querySelector('.questionTextLink').innerText).toEqual(mockQuestions[0].QuestionText);
      expect(secondCard.querySelector('.questionTextLink')).toBeTruthy();
      expect(secondCard.querySelector('.questionTextLink').innerText).toEqual(mockQuestions[1].QuestionText);
    });

    it('should show an answer-list component', () => {
      expect(firstCard.querySelectorAll('app-answer-list').length).toEqual(1);
      expect(secondCard.querySelectorAll('app-answer-list').length).toEqual(1);
    });

    it('should show the question tags', () => {
      expect(firstCard.querySelectorAll('.questionTag').length).toEqual(mockQuestions[0].QuestionTags.length);
      expect(secondCard.querySelectorAll('.questionTag').length).toEqual(mockQuestions[1].QuestionTags.length);
    });

    it('should have a question edit button', () => {
      expect(firstCard.querySelector('.questionEditButton')).toBeTruthy();
      expect(secondCard.querySelector('.questionEditButton')).toBeTruthy();
    });

    it('should have a question delete button', () => {
      expect(firstCard.querySelector('.questionDeleteButton')).toBeTruthy();
      expect(secondCard.querySelector('.questionDeleteButton')).toBeTruthy();
    });

  });

});
