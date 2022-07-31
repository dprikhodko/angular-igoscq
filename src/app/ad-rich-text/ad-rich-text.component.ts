import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SettingBase } from "../model/setting-base";

@Component({
  selector: "app-ad-rich-text",
  templateUrl: "./ad-rich-text.component.html",
  styleUrls: ["./ad-rich-text.component.css"],
})
export class AdRichTextComponent implements OnInit {
  @Input() setting!: SettingBase;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
