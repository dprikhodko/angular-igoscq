import { SettingBase } from "./setting-base";
import { TEXT } from "./setting-types";

export class TextSetting extends SettingBase {
  override controlType = TEXT;
}
