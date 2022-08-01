import { SettingBase } from "./setting-base";
import { SECTION } from "./setting-types";

export class SectionSetting extends SettingBase {
  override controlType = SECTION;
}
