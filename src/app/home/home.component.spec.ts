import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CategoryListComponent } from '../category-list/category-list.component';

@Component({
  selector: 'app-question-carousel',
  template: '<p>Mock question carousel component'
})
class MockQuestionCarouselComponent {};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, MockQuestionCarouselComponent, CategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a Question Carousel component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-question-carousel')).not.toBe(null);
  }));

  it('should have a Categories List component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-category-list')).not.toBe(null);
  }));
});
