import { SettingBase } from "./setting-base";
import { UPLOAD } from "./setting-type";

export class UploadSetting extends SettingBase {
  override controlType = UPLOAD;
}
