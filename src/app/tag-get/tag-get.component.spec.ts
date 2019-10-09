import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagGetComponent } from './tag-get.component';

describe('TagGetComponent', () => {
  let component: TagGetComponent;
  let fixture: ComponentFixture<TagGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
