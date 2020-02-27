import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { TagsService } from "./tags.service";
import Tag from "./Tag";

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

  it("should be created", () => {
    const service: TagsService = TestBed.get(TagsService);
    expect(service).toBeTruthy();
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
