import { Component } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { HomeComponent } from "./home.component";
import { TagListComponent } from "../tag-list/tag-list.component";

@Component({
  selector: "app-question-carousel",
  template: "<p>Mock question carousel component"
})
class MockQuestionCarouselComponent {}

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [
        HomeComponent,
        MockQuestionCarouselComponent,
        TagListComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should have a Question Carousel component", async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("app-question-carousel")).not.toBe(null);
  }));

  it("should have a Tag List component", async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("app-tag-list")).not.toBe(null);
  }));
});
