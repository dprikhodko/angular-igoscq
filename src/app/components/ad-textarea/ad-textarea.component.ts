import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SettingBase } from "../../model/setting-base";

@Component({
  selector: "app-ad-textarea",
  templateUrl: "./ad-textarea.component.html",
  styleUrls: ["./ad-textarea.component.css"],
})
export class AdTextareaComponent implements OnInit {
  @Input() setting!: SettingBase;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
