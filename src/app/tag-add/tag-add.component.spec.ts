import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { TagAddComponent } from "./tag-add.component";
import Tag from "../Tag";
import { TagsService } from "../tags.service";

describe("TagAddComponent", () => {
  let component: TagAddComponent;
  let fixture: ComponentFixture<TagAddComponent>;
  let tagsService: TagsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [TagAddComponent],
      providers: [TagsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagAddComponent);
    component = fixture.componentInstance;
    tagsService = TestBed.get(TagsService);
    fixture.detectChanges();
  });

  it("should have an addTag method", () => {
    let addTagServiceSpy = spyOn<any>(tagsService, "addTag");
    component.addTag("tag1");
    expect(addTagServiceSpy).toHaveBeenCalled();
  });

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
