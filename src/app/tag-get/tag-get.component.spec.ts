import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable } from "rxjs/Rx";

import { TagGetComponent } from "./tag-get.component";
import { TagsService } from "../tags.service";

import Tag from "../Tag";

describe("TagGetComponent", () => {
  let component: TagGetComponent;
  let fixture: ComponentFixture<TagGetComponent>;
  let tagsService: TagsService;
  const mockTags: Tag[] = [
    {
      _id: "aaa",
      TagName: "Tag1"
    },
    {
      _id: "bbb",
      TagName: "Tag2"
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TagGetComponent],
      providers: [TagsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagGetComponent);
    component = fixture.componentInstance;
    component.tags = mockTags.slice(0);
    tagsService = TestBed.get(TagsService);
    fixture.detectChanges();
  });

  it("should have a tag array", () => {
    expect(component.tags).not.toBe(null);
    expect(component.tags).toEqual(mockTags);
  });

  it("should have a deleteTag method", () => {
    let deleteSpy = spyOn<any>(tagsService, "deleteTag").and.returnValue(
      Observable.of("success")
    );
    expect(component.tags).toEqual(mockTags);
    let idToDelete = mockTags[0]._id;
    component.deleteTag(idToDelete);
    expect(component.tags).toEqual([mockTags[1]]);
    expect(deleteSpy).toHaveBeenCalled();
  });

  it("should have a card for each tag", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".tagCard").length).toEqual(
      mockTags.length
    );
  });

  describe("cards", () => {
    let compiled;
    let firstCard;
    let secondCard;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
      firstCard = compiled.querySelectorAll(".tagCard")[0];
      secondCard = compiled.querySelectorAll(".tagCard")[1];
    });

    it("should show the tag name", () => {
      expect(firstCard.querySelector(".tagName")).toBeTruthy();
      expect(firstCard.querySelector(".tagName").innerText).toEqual(
        mockTags[0].TagName
      );
      expect(secondCard.querySelector(".tagName")).toBeTruthy();
      expect(secondCard.querySelector(".tagName").innerText).toEqual(
        mockTags[1].TagName
      );
    });

    it("should have a tag edit button", () => {
      expect(firstCard.querySelector(".tagEditButton")).toBeTruthy();
      expect(secondCard.querySelector(".tagEditButton")).toBeTruthy();
    });

    it("should have a delete button", () => {
      expect(firstCard.querySelector(".tagDeleteButton")).toBeTruthy();
      expect(secondCard.querySelector(".tagDeleteButton")).toBeTruthy();
    });
  });
});
