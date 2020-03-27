import { Component, OnInit } from "@angular/core";

import { TagsService } from "../tags.service";
import Tag from "../Tag";

@Component({
  selector: "app-tag-list",
  templateUrl: "./tag-list.component.html",
  styleUrls: ["./tag-list.component.css"]
})
export class TagListComponent implements OnInit {
  tags: Tag[];

  constructor(private ts: TagsService) {}

  ngOnInit() {
    this.ts.getTags().subscribe((data: Tag[]) => {
      this.tags = data;
    });
  }
}
