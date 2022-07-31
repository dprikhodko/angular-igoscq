import { Component, Input, OnInit } from "@angular/core";
import { SettingBase } from "../model/setting-base";

@Component({
  selector: "app-ad-dropdown",
  templateUrl: "./ad-dropdown.component.html",
  styleUrls: ["./ad-dropdown.component.css"],
})
export class AdDropdownComponent implements OnInit {
  @Input() setting!: SettingBase;
  constructor() {}

  ngOnInit(): void {}
}
