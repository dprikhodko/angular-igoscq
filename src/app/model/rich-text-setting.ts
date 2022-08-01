import { SettingBase } from "./setting-base";
import { RICHTEXT } from "./setting-types";

export class RichTextSetting extends SettingBase {
  override controlType = RICHTEXT;
}
