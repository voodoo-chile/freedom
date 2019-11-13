import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { QuestionCarouselComponent } from './question-carousel.component';

describe('QuestionCarouselComponent', () => {
  let component: QuestionCarouselComponent;
  let fixture: ComponentFixture<QuestionCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        CarouselModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule
        ],
      declarations: [ QuestionCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a questions array', () => {
    expect(component.questions).not.toBe(null);
  });


});
