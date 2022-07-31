import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SettingBase } from "../../model/setting-base";
import { AdService } from "../../services/ad-service";

@Component({
  selector: "app-ad-messenger",
  templateUrl: "./ad-messenger.component.html",
  styleUrls: ["./ad-messenger.component.css"],
  providers: [AdService],
})
export class AdMessengerComponent implements OnInit {
  settings: SettingBase[] | null = [];
  form!: FormGroup;
  payLoad = "";

  constructor(private adService: AdService) {}

  ngOnInit(): void {
    this.settings = this.adService.getSettings();
    this.form = this.adService.getFormElement(this.settings);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
