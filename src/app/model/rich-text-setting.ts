import { SettingBase } from "./setting-base";
import { RICH_TEXT } from "./setting-type";

export class RichTextSetting extends SettingBase {
  override controlType = RICH_TEXT;
}
