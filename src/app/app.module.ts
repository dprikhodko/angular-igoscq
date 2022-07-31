import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { AdMessengerComponent } from "./ad-messenger/ad-messenger.component";
import { AdTextInputComponent } from "./ad-text-input/ad-text-input.component";
import { AdRichTextComponent } from "./ad-rich-text/ad-rich-text.component";
import { AdColorPickerComponent } from "./ad-color-picker/ad-color-picker.component";
import { AdLogoComponent } from "./ad-logo/ad-logo.component";
import { AdTapActionComponent } from "./ad-tap-action/ad-tap-action.component";
import { AdDropdownComponent } from "./ad-dropdown/ad-dropdown.component";
import { AdTextareaComponent } from "./ad-textarea/ad-textarea.component";
import { AdCheckboxComponent } from "./ad-checkbox/ad-checkbox.component";
import { AdRadiosComponent } from "./ad-radios/ad-radios.component";
import { AdSettingComponent } from "./ad-setting/ad-setting.component";
import { AdUploadComponent } from './ad-upload/ad-upload.component';
import { AdContainerComponent } from './ad-container/ad-container.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: AdMessengerComponent },
      { path: "temp", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
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
