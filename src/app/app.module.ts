import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AdMessengerComponent } from "./components/ad-messenger/ad-messenger.component";
import { AdTextInputComponent } from "./components/ad-setting-text/ad-text-input.component";
import { AdRichTextComponent } from "./components/ad-setting-richtext/ad-rich-text.component";
import { AdColorPickerComponent } from "./components/ad-setting-color-picker/ad-color-picker.component";
import { AdDropdownComponent } from "./components/ad-setting-dropdown/ad-dropdown.component";
import { AdTextareaComponent } from "./components/ad-setting-textarea/ad-textarea.component";
import { AdCheckboxComponent } from "./components/ad-setting-checkbox/ad-checkbox.component";
import { AdRadiosComponent } from "./components/ad-setting-radios/ad-radios.component";
import { AdSettingComponent } from "./components/ad-setting/ad-setting.component";
import { AdUploadComponent } from "./components/ad-setting-upload/ad-upload.component";
import { AdSettingSectionComponent } from "./components/ad-setting-section/ad-setting-section.component";
import { AdSettingMapComponent } from './components/ad-setting-map/ad-setting-map.component';

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
    AdDropdownComponent,
    AdTextareaComponent,
    AdCheckboxComponent,
    AdRadiosComponent,
    AdSettingComponent,
    AdUploadComponent,
    AdSettingSectionComponent,
    AdSettingMapComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
