import { FormControl, FormGroup } from "@angular/forms";

export class SettingBase {
  value: string;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  children: SettingBase[];
  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: string;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      children?: SettingBase[];
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value || "";
    this.key = options.key || "";
    this.label = options.label || "";
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || "";
    this.type = options.type || "";
    this.children = options.children || [];
    this.options = options.options || [];
  }

  getFormElement() {
    if (this.children.length === 0) {
      return new FormControl("");
    }

    const group: any = {};
    this.children.forEach((child) => {
      group[child.key] = child.getFormElement();
    });
    return new FormGroup(group);
  }

  getFormGroup(form: FormGroup) {
    return form.get(this.key) as FormGroup;
  }
}
