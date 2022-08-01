import { SettingBase } from "./setting-base";
import { DROPDOWN } from "./setting-types";

export class DropdownSetting extends SettingBase {
  override controlType = DROPDOWN;
}
