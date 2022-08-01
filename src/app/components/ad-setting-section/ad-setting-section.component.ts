import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SettingBase } from "src/app/model/setting-base";

@Component({
  selector: "app-ad-setting-section",
  templateUrl: "./ad-setting-section.component.html",
  styleUrls: ["./ad-setting-section.component.css"],
})
export class AdSettingSectionComponent implements OnInit {
  @Input() setting!: SettingBase;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
