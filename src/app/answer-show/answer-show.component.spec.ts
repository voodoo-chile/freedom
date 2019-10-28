import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnswerShowComponent } from './answer-show.component';
import { AnswersService } from '../answers.service';

describe('AnswerShowComponent', () => {
  let component: AnswerShowComponent;
  let fixture: ComponentFixture<AnswerShowComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of answers', () => {
    expect(component.answer).not.toBe(null);
  });

});
