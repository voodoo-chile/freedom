import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class TagsService {
  uri = "http://localhost:4000/tags";

  constructor(private http: HttpClient, private router: Router) {}

  addTag(TagName) {
    const obj = { TagName };
    this.http
      .post(`${this.uri}/add`, obj)
      .subscribe(res => this.router.navigate(["tags"]));
  }

  getTags() {
    return this.http.get(`${this.uri}`);
  }

  getTag(id) {
    return this.http.get(`${this.uri}/${id}`);
  }

  editTag(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateTag(TagName, id) {
    const obj = { TagName };
    return this.http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => this.router.navigate(["tags"]));
  }

  deleteTag(id: string) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
