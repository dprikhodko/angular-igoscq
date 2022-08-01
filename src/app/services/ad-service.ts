import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { FormGroup } from "@angular/forms";
import { SettingBase } from "../model/setting-base";
import { TextSetting } from "../model/text-setting";
import { RichTextSetting } from "../model/rich-text-setting";
import { ColorPickerSetting } from "../model/color-picker-setting";
import { SectionSetting } from "../model/section-setting";
import { UploadSetting } from "../model/upload-setting";
import { CheckboxSetting } from "../model/checkbox-setting";
import { DropdownSetting } from "../model/dropdown-setting";
import { TextareaSetting } from "../model/textarea-setting copy";

@Injectable()
export class AdService {
  getSettings() {
    const settings: SettingBase[] = [
      new TextSetting({
        key: "campaignName",
        label: "Campaign Name",
      }),
      new TextareaSetting({
        key: "message",
        label: "Message",
      }),
      // new ColorsSetting({
      //   children: [
      //     new ColorPickerSetting({
      //       key: "backgroundColor",
      //       label: "Background color",
      //       required: true,
      //     }),
      //     new ColorPickerSetting({
      //       key: "textColor",
      //       label: "Text color",
      //       required: true,
      //     }),
      //   ],
      // }),
      new SectionSetting({
        key: "logo",
        children: [
          new UploadSetting({
            key: "logoUpload",
            label: "Logo",
          }),
          new SectionSetting({
            key: "logoBehavior",
            children: [
              new CheckboxSetting({
                key: "logoHold",
                label: "Logo hold",
              }),
              new CheckboxSetting({
                key: "hideXbutton",
                label: "Hide X button",
              }),
              new CheckboxSetting({
                key: "flyingButton",
                label: "Flying button",
              }),
            ],
          }),
        ],
      }),
      // TODO add all types configuration
      new SectionSetting({
        key: "tapActionSetting",
        children: [
          new DropdownSetting({
            key: "tapAction",
            label: "Tap action",
            options: [
              { key: "website", value: "Tap to website" },
              { key: "map", value: "Tap to map" },
              { key: "video", value: "Tap to video" },
            ],
          }),
          new TextSetting({
            key: "websiteUrl",
            label: "Website URL",
          }),
        ],
      }),
      new DropdownSetting({
        key: "backgroundTheme",
        label: "Background theme",
        options: [
          { key: "website", value: "Background theme website" },
          { key: "map", value: "Background theme to map" },
          { key: "video", value: "Background theme to video" },
        ],
      }),
      new TextareaSetting({
        key: "comment",
        label: "Comment",
      }),
    ];

    return settings;
  }

  createForm(settings: SettingBase[]) {
    const group: any = {};
    settings.forEach((setting) => {
      group[setting.key] = setting.createFormElement();
    });
    return new FormGroup(group);
  }

  updateForm(form: FormGroup, settings: SettingBase[]) {}
}
