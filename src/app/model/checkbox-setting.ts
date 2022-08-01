import { SettingBase } from "./setting-base";
import { CHECKBOX } from "./setting-types";

export class CheckboxSetting extends SettingBase {
  override controlType = CHECKBOX;
}
