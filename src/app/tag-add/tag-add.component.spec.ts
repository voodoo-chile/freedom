import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { TagAddComponent } from "./tag-add.component";

describe("TagAddComponent", () => {
  let component: TagAddComponent;
  let fixture: ComponentFixture<TagAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [TagAddComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit("should have an addTag method", () => {});

  it("has a tag form", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("form")).toBeTruthy();
  });

  describe("tag form", () => {
    let compiled;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    });

    it("should have a TagName input", () => {
      expect(compiled.querySelector("#tagNameInput")).toBeTruthy();
    });

    it('has a "Create Tag" button', () => {
      expect(compiled.querySelector("button")).toBeTruthy();
      expect(compiled.querySelector("button").innerText).toEqual("Create Tag");
    });
  });
});
