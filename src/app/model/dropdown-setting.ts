import { SettingBase } from "./setting-base";
import { DROPDOWN } from "./setting-type";

export class DropdownSetting extends SettingBase {
  override controlType = DROPDOWN;
}
