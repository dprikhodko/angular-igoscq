import { SettingBase } from "./setting-base";
import { COLOR_PICKER } from "./setting-types";

export class ColorPickerSetting extends SettingBase {
  override controlType = COLOR_PICKER;
}
