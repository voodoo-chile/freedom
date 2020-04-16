import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { TagEditComponent } from "./tag-edit.component";
import Tag from "../Tag";
import { Observable } from "rxjs";
import { TagsService } from "../tags.service";

describe("TagEditComponent", () => {
  let component: TagEditComponent;
  let fixture: ComponentFixture<TagEditComponent>;
  let tagsService: TagsService;
  const mockTag: Tag = {
    _id: "aaa",
    Tag: "Tag1",
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [TagEditComponent],
      providers: [TagsService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagEditComponent);
    component = fixture.componentInstance;
    component.tag = mockTag;
    component.createForm();
    tagsService = TestBed.get(TagsService);
    fixture.detectChanges();
  });

  it("should have an updateTag method", () => {
    let updateSpy = spyOn<any>(tagsService, "updateTag").and.returnValue(
      Observable.of("success")
    );
    expect(component.tag).toEqual(mockTag);
    let editedTag = "Edited Tag";
    component.updateTag(editedTag, mockTag._id);
    expect(updateSpy).toHaveBeenCalled();
  });

  it("should have a tag object", () => {
    expect(component.tag).toEqual(mockTag);
  });

  it("has a tag edit form", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("form")).toBeTruthy();
  });

  describe("answer form", () => {
    let compiled;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    });

    it("has a Tag input", () => {
      expect(compiled.querySelector("#tagInput")).toBeTruthy();
    });

    it("has an 'update tag' button", () => {
      expect(compiled.querySelector("button")).toBeTruthy();
      expect(compiled.querySelector("button").innerText).toEqual("Update Tag");
    });
  });
});
