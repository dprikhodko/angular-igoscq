import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SettingBase } from "../../model/setting-base";
import * as SettingTypes from "../../model/setting-type";

@Component({
  selector: "app-ad-setting",
  templateUrl: "./ad-setting.component.html",
  styleUrls: ["./ad-setting.component.css"],
})
export class AdSettingComponent implements OnInit {
  @Input() setting!: SettingBase;
  @Input() form!: FormGroup;

  SettingTypes = SettingTypes;

  constructor() {}

  ngOnInit(): void {}
}
