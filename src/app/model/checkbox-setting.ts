import { SettingBase } from "./setting-base";
import { CHECKBOX } from "./setting-type";

export class CheckboxSetting extends SettingBase {
  override controlType = CHECKBOX;
}
