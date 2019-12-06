import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import Question from './Question';

import { QuestionsService } from './questions.service';

describe('QuestionsService', () => {
  let service: QuestionsService;
  let httpMock: HttpTestingController;
  let router: Router;
  const dummyQuestions: Question[] = [{
    QuestionText: 'this is a mock question',
    QuestionAnswers: ['aa1', 'aa2'],
    answerTitles: ['title1', 'title2'],
    QuestionTags: ['mockTag', 'mockTag2'] 
  }, {
    QuestionText: 'this is also a mock question',
    QuestionAnswers: ['aa1', 'aa2'],
    answerTitles: ['title1', 'title2'],
    QuestionTags: ['mockTag', 'mockTag2']
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    service = TestBed.get(QuestionsService);
    httpMock = TestBed.get(HttpTestingController);
    router = TestBed.get(Router);
  });

  //test custom method addQuestion(QuestionText, QuestionAnswers, QuestionTags)
  it('addQuestion method should send a question to the API via POST', () => {
    const navigateSpy = spyOn(router, 'navigate');
    service.addQuestion(
      dummyQuestions[0].QuestionText,
      dummyQuestions[0].QuestionAnswers,
      dummyQuestions[0].QuestionTags
    );
    const response = {'Question': 'Question has been added successfully'};
    const request = httpMock.expectOne(`${service.uri}/add`);
    expect(request.request.method).toBe('POST');
    request.flush(response);
    expect(navigateSpy).toHaveBeenCalledWith(['questions']);
  });

  //test custom method getQuestions()
  it('getQuestions method should retrieve questions from the API via GET', () => {
    service.getQuestions().subscribe((questions: Question[]) => {
      expect(questions.length).toBe(2);
      expect(questions).toEqual(dummyQuestions);
    });
    const request = httpMock.expectOne( `${service.uri}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyQuestions);
  });

  //test custom method getQuestion(id)
  it('getQuestion method should retrieve a question from the API via GET', () => {
    const id: string = 'aaa';
    service.getQuestion(id).subscribe((question: Question) => {
      expect(question).toBeTruthy();
      expect(question).toEqual(dummyQuestions[0]);
    });
    const request = httpMock.expectOne(`${service.uri}/${id}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyQuestions[0]);
  });
  
  //test custom method editQuestion(id)
  it('editQuestion method should retrieve a question from the API via GET', () => {
    const id: string = 'aaa';
    service.editQuestion(id).subscribe((question: Question) => {
      expect(question).toBeTruthy();
      expect(question).toEqual(dummyQuestions[0]);
    });
    const request = httpMock.expectOne(`${service.uri}/edit/${id}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyQuestions[0]);
  });

  //test custom method updateQuestion(QuestionText, QuestionAnswers, QuestionTags, id)
  it('updateQuestion method should send a question to the API via POST', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const id = 'a1a1';
    service.updateQuestion(
      dummyQuestions[0].QuestionText,
      dummyQuestions[0].QuestionAnswers,
      dummyQuestions[0].QuestionTags,
      id
    );
    const response = {'Question': 'Question has been added successfully'};
    const request = httpMock.expectOne(`${service.uri}/update/${id}`);
    expect(request.request.method).toBe('POST');
    request.flush(response);
    expect(navigateSpy).toHaveBeenCalledWith(['questions']);
  });

  //test custom method deleteQuestion(id)
  it('deleteQuestion method should request a question delete from the API via GET', () => {
    const id: string = 'aaa';
    const response: string = 'Successfully removed';
    service.deleteQuestion(id).subscribe((apiResponse: string) => {
      expect(apiResponse).toBeTruthy();
      expect(apiResponse).toEqual(response);
    });
    const request = httpMock.expectOne(`${service.uri}/delete/${id}`);
    expect(request.request.method).toBe('GET');
    request.flush(response);
  });

  afterEach(() => {
    httpMock.verify();
  });

});
