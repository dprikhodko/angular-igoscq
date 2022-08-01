import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SettingBase } from "../../model/setting-base";

@Component({
  selector: "app-ad-checkbox",
  templateUrl: "./ad-checkbox.component.html",
  styleUrls: ["./ad-checkbox.component.css"],
})
export class AdCheckboxComponent implements OnInit {
  @Input() setting!: SettingBase;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
