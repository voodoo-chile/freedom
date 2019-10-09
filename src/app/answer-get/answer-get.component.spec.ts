import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerGetComponent } from './answer-get.component';

describe('AnswerGetComponent', () => {
  let component: AnswerGetComponent;
  let fixture: ComponentFixture<AnswerGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
