import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'ng2-slim-loading-bar',
  template: '<p>Mock Slim loading bar</p>'
})
class MockLoadingBar {};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockLoadingBar
      ],
      providers: [
        SlimLoadingBarService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'freedom'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('freedom');
  });

  describe('nav bar', () => {
    let fixture: ComponentFixture<AppComponent>
    let compiled

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    });

    it('should have a nav link to home', () => {
      expect(compiled.querySelectorAll('.nav-link')[0].textContent).toContain('Home');
    });

    it('should have a nav link to Create Questions', () => {
      expect(compiled.querySelectorAll('.nav-link')[1].textContent).toContain('Create Question');
    });

    it('should have a nav link to Questions', () => {
      expect(compiled.querySelectorAll('.nav-link')[2].textContent).toContain('Questions');
    });

    it('should have a nav link to Create Answer', () => {
      expect(compiled.querySelectorAll('.nav-link')[3].textContent).toContain('Create Answer');
    });

    it('should have a nav link to Answers', () => {
      expect(compiled.querySelectorAll('.nav-link')[4].textContent).toContain('Answers');
    });
  });
});
