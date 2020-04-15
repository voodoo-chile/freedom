import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TagsService } from "../tags.service";

@Component({
  selector: "app-tag-add",
  templateUrl: "./tag-add.component.html",
  styleUrls: ["./tag-add.component.css"]
})
export class TagAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ts: TagsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      TagName: ["", Validators.required]
    });
  }

  addTag(tagName) {
    this.ts.addTag(tagName);
  }

  ngOnInit() {}
}
