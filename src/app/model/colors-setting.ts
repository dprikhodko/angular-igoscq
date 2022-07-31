import { SettingBase } from "./setting-base";
import { COLORS } from "./setting-type";

export class ColorsSetting extends SettingBase {
  override controlType = COLORS;
}
