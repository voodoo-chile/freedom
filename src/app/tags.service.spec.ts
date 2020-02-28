import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { TagsService } from "./tags.service";
import Tag from "./Tag";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";

describe("TagsService", () => {
  let service: TagsService;
  let httpMock: HttpTestingController;
  let router: Router;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.get(TagsService);
    httpMock = TestBed.get(HttpTestingController);
    router = TestBed.get(Router);
  });

  // Test custom method tagAdd(TagName)
  it("addTag method should send a tag to the API via POST", () => {
    const navigateSpy = spyOn(router, "navigate");
    service.addTag(mockTags[0].TagName);
    const response = { Tag: "Tag has been added successfully" };
    const request = httpMock.expectOne(`${service.uri}/add`);
    expect(request.request.method).toBe("POST");
    request.flush(response);
    expect(navigateSpy).toHaveBeenCalledWith(["tags"]);
  });

  //test custom method getTags()
  it("getQuestions method should retrieve questions from the API via GET", () => {
    service.getTags().subscribe((tags: Tag[]) => {
      expect(tags.length).toBe(2);
      expect(tags).toEqual(mockTags);
    });
    const request = httpMock.expectOne(`${service.uri}`);
    expect(request.request.method).toBe("GET");
    request.flush(mockTags);
  });

  // test custom method getTag(id)
  it("getTag method should retrieve a tag from the API via GET", () => {
    const id: string = mockTags[0]._id;
    service.getTag(id).subscribe((tag: Tag) => {
      expect(tag).toBeTruthy();
      expect(tag).toEqual(mockTags[0]);
    });
    const request = httpMock.expectOne(`${service.uri}/${id}`);
    expect(request.request.method).toBe("GET");
    request.flush(mockTags[0]);
  });

  // test custom method editTag(id)
  it("editTag method should retrieve a tag from the API via GET", () => {
    const id = mockTags[0]._id;
    service.editTag(id).subscribe((tag: Tag) => {
      expect(tag).toBeTruthy();
      expect(tag).toEqual(mockTags[0]);
    });
    const request = httpMock.expectOne(`${service.uri}/edit/${id}`);
    expect(request.request.method).toBe("GET");
    request.flush(mockTags[0]);
  });

  // test custom method updateTag(TagName, id)
  it("updateTag method should send a tag to the API via POST", () => {
    const navigateSpy = spyOn(router, "navigate");
    const id = mockTags[0]._id;
    service.updateTag(mockTags[0].TagName, id);
    const response = { Tag: "Tag has been updated successfully" };
    const request = httpMock.expectOne(`${service.uri}/update/${id}`);
    expect(request.request.method).toBe("POST");
    request.flush(response);
    expect(navigateSpy).toHaveBeenCalledWith(["tags"]);
  });

  //test custom method deleteTag(id)
  it("deleteTag method should request a question delete from teh API via GET", () => {
    const id: string = "aaa";
    const response: string = "Successfully removed";
    service.deleteTag(id).subscribe((apiResponse: string) => {
      expect(apiResponse).toBeTruthy();
      expect(apiResponse).toEqual(response);
    });
    const request = httpMock.expectOne(`${service.uri}/delete/${id}`);
    expect(request.request.method).toBe("GET");
    request.flush(response);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
