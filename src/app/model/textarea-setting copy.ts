import { SettingBase } from "./setting-base";
import { TEXTAREA } from "./setting-types";

export class TextareaSetting extends SettingBase {
  override controlType = TEXTAREA;
}
