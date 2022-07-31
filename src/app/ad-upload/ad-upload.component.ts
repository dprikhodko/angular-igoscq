import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SettingBase } from "../model/setting-base";

@Component({
  selector: "app-ad-upload",
  templateUrl: "./ad-upload.component.html",
  styleUrls: ["./ad-upload.component.css"],
})
export class AdUploadComponent implements OnInit {
  @Input() setting!: SettingBase;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
