import { SettingBase } from "./setting-base";
import { UPLOAD } from "./setting-types";

export class UploadSetting extends SettingBase {
  override controlType = UPLOAD;
}
