import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnswerEditComponent } from './answer-edit.component';

describe('AnswerEditComponent', () => {
  let component: AnswerEditComponent;
  let fixture: ComponentFixture<AnswerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ AnswerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
      expect(compiled.querySelector('button').innerHTML).toEqual('Update Answer');
    });

  });
});
