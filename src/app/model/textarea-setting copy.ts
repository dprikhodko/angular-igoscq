import { SettingBase } from "./setting-base";
import { TEXTAREA } from "./setting-type";

export class TextareaSetting extends SettingBase {
  override controlType = TEXTAREA;
}
