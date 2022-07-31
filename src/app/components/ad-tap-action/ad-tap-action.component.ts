import { Component, Input, OnInit } from "@angular/core";
import { SettingBase } from "../../model/setting-base";

@Component({
  selector: "app-ad-tap-action",
  templateUrl: "./ad-tap-action.component.html",
  styleUrls: ["./ad-tap-action.component.css"],
})
export class AdTapActionComponent implements OnInit {
  @Input() setting!: SettingBase;
  constructor() {}

  ngOnInit(): void {}
}
