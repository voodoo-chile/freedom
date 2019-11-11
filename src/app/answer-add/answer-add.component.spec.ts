import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnswerAddComponent } from './answer-add.component';

describe('AnswerAddComponent', () => {
  let component: AnswerAddComponent;
  let fixture: ComponentFixture<AnswerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ AnswerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has an answer form', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  describe('answer form', () => {
    let compiled;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    });

    it('has an AnswerTitle input', () => {
      expect(compiled.querySelector('#answerTitleInput')).toBeTruthy();
    });

    it('has an AnswerAuthor input', () => {
      expect(compiled.querySelector('#answerAuthorInput')).toBeTruthy();
    });

    it('has an AnswerUrl input', () => {
      expect(compiled.querySelector('#answerUrlInput')).toBeTruthy();
    });

    it('has an AnswerBlurb input', () => {
      expect(compiled.querySelector('#answerBlurbInput')).toBeTruthy();
    });

    it('has an AnswerTags input', () => {
      expect(compiled.querySelector('#answerTagsInput')).toBeTruthy();
    });

    it('has a "create answer" button', () => {
      expect(compiled.querySelector('button')).toBeTruthy();
      expect(compiled.querySelector('button').innerHTML).toEqual('Create Answer');
    });

  });
});
