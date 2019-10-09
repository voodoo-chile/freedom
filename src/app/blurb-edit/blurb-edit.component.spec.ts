import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurbEditComponent } from './blurb-edit.component';

describe('BlurbEditComponent', () => {
  let component: BlurbEditComponent;
  let fixture: ComponentFixture<BlurbEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlurbEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurbEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
