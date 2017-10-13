import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule, MatMenuModule, MatFormFieldModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ShopModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  togglebasket: boolean;
  toggle() {
    if(this.togglebasket = true) {
      this.togglebasket = false;
    }
    else {
      this.togglebasket = true;
    }
  }
 }
