import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurbAddComponent } from './blurb-add.component';

describe('BlurbAddComponent', () => {
  let component: BlurbAddComponent;
  let fixture: ComponentFixture<BlurbAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlurbAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurbAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
