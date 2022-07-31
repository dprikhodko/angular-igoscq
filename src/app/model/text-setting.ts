import { SettingBase } from "./setting-base";
import { TEXT } from "./setting-type";

export class TextSetting extends SettingBase {
  override controlType = TEXT;
}
