import { Component, OnInit } from "@angular/core";
import Tag from "../Tag";
import { TagsService } from "../tags.service";

@Component({
  selector: "app-tag-get",
  templateUrl: "./tag-get.component.html",
  styleUrls: ["./tag-get.component.css"]
})
export class TagGetComponent implements OnInit {
  tags: Tag[];

  constructor(private ts: TagsService) {}

  deleteTag(id) {
    this.ts.deleteTag(id).subscribe(res => {
      this.tags.splice(id, 1);
    });
  }

  ngOnInit() {
    this.ts.getTags().subscribe((data: Tag[]) => {
      this.tags = data;
    });
  }
}
