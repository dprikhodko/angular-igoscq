import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AdMessengerComponent } from "./components/ad-messenger/ad-messenger.component";
import { AdTextInputComponent } from "./components/ad-text-input/ad-text-input.component";
import { AdRichTextComponent } from "./components/ad-rich-text/ad-rich-text.component";
import { AdColorPickerComponent } from "./components/ad-color-picker/ad-color-picker.component";
import { AdLogoComponent } from "./components/ad-logo/ad-logo.component";
import { AdTapActionComponent } from "./components/ad-tap-action/ad-tap-action.component";
import { AdDropdownComponent } from "./components/ad-dropdown/ad-dropdown.component";
import { AdTextareaComponent } from "./components/ad-textarea/ad-textarea.component";
import { AdCheckboxComponent } from "./components/ad-checkbox/ad-checkbox.component";
import { AdRadiosComponent } from "./components/ad-radios/ad-radios.component";
import { AdSettingComponent } from "./components/ad-setting/ad-setting.component";
import { AdUploadComponent } from "./components/ad-upload/ad-upload.component";
import { AdContainerComponent } from "./components/ad-container/ad-container.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: "", component: AdMessengerComponent }]),
  ],
  declarations: [
    AppComponent,
    AdMessengerComponent,
    AdTextInputComponent,
    AdRichTextComponent,
    AdColorPickerComponent,
    AdLogoComponent,
    AdTapActionComponent,
    AdDropdownComponent,
    AdTextareaComponent,
    AdCheckboxComponent,
    AdRadiosComponent,
    AdSettingComponent,
    AdUploadComponent,
    AdContainerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
