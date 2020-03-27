import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { TagListComponent } from "./tag-list.component";
import Tag from "../Tag";

describe("TagListComponent", () => {
  let component: TagListComponent;
  let fixture: ComponentFixture<TagListComponent>;
  let mockTags: Tag[] = [
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
      declarations: [TagListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagListComponent);
    component = fixture.componentInstance;
    component.tags = mockTags;
    fixture.detectChanges();
  });

  it("should have a tags array", () => {
    expect(component.tags).not.toBeNull();
  });

  it("should link the tag name", () => {
    let compiled = fixture.debugElement.nativeElement;
    let tagList = compiled.querySelectorAll(".tagItem");
    expect(tagList.length).toEqual(mockTags.length);
    expect(tagList[0].querySelectorAll("a").length).toEqual(1);
    expect(tagList[0].querySelector("a").innerText).toEqual(
      mockTags[0].TagName
    );
    expect(tagList[1].querySelectorAll("a").length).toEqual(1);
    expect(tagList[1].querySelector("a").innerText).toEqual(
      mockTags[1].TagName
    );
  });
});
