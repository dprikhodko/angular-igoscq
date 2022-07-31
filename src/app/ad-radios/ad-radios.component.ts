import { Component, Input, OnInit } from "@angular/core";
import { SettingBase } from "../model/setting-base";

@Component({
  selector: "app-ad-radios",
  templateUrl: "./ad-radios.component.html",
  styleUrls: ["./ad-radios.component.css"],
})
export class AdRadiosComponent implements OnInit {
  @Input() setting!: SettingBase;
  constructor() {}

  ngOnInit(): void {}
}
