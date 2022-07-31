import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SettingBase } from "../model/setting-base";

@Component({
  selector: "app-ad-logo",
  templateUrl: "./ad-logo.component.html",
  styleUrls: ["./ad-logo.component.css"],
})
export class AdLogoComponent implements OnInit {
  @Input() setting!: SettingBase;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
