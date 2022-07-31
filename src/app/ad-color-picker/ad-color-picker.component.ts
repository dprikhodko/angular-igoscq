import { Component, Input, OnInit } from "@angular/core";
import { SettingBase } from "../model/setting-base";

@Component({
  selector: "app-ad-color-picker",
  templateUrl: "./ad-color-picker.component.html",
  styleUrls: ["./ad-color-picker.component.css"],
})
export class AdColorPickerComponent implements OnInit {
  @Input() setting!: SettingBase;
  constructor() {}

  ngOnInit(): void {}
}
