import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class TagsService {
  uri = "http://localhost:4000/tags";

  constructor(private http: HttpClient, private router: Router) {}

  getTags() {
    return this.http.get(`${this.uri}`);
  }

  deleteTag(id: string) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
