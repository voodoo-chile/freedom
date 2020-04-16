import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TagsService } from "../tags.service";

@Component({
  selector: "app-tag-edit",
  templateUrl: "./tag-edit.component.html",
  styleUrls: ["./tag-edit.component.css"],
})
export class TagEditComponent implements OnInit {
  angForm: FormGroup;
  tag: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private ts: TagsService
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Tag: ["", Validators.required],
    });
  }

  updateTag(Tag, id) {
    this.route.params.subscribe((params) => {
      this.ts.updateTag(Tag, params.id);
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.ts.editTag(params["id"]).subscribe((res) => {
        this.tag = res;
        this.angForm.get("Tag").setValue(this.tag.Tag);
      });
    });
  }
}
