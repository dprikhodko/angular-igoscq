import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SettingBase } from "../../model/setting-base";

@Component({
  selector: "app-ad-container",
  templateUrl: "./ad-container.component.html",
  styleUrls: ["./ad-container.component.css"],
})
export class AdContainerComponent implements OnInit {
  @Input() setting!: SettingBase;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
