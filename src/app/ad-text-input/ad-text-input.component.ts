import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SettingBase } from "../model/setting-base";

@Component({
  selector: "app-ad-text-input",
  templateUrl: "./ad-text-input.component.html",
  styleUrls: ["./ad-text-input.component.css"],
})
export class AdTextInputComponent implements OnInit {
  @Input() setting!: SettingBase;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
