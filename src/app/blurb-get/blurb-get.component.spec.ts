import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurbGetComponent } from './blurb-get.component';

describe('BlurbGetComponent', () => {
  let component: BlurbGetComponent;
  let fixture: ComponentFixture<BlurbGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlurbGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurbGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
