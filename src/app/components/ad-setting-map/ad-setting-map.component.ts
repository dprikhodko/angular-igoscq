import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SettingBase } from "src/app/model/setting-base";

@Component({
  selector: "app-ad-setting-map",
  templateUrl: "./ad-setting-map.component.html",
  styleUrls: ["./ad-setting-map.component.css"],
})
export class AdSettingMapComponent implements OnInit {
  @Input() setting!: SettingBase;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
