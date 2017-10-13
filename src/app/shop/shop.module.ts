import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaestroComponent } from '../maestro/maestro.component';
import { BasketComponent } from '../basket/basket.component';
import {MatButtonModule, MatMenuModule, MatFormFieldModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
  ],
  declarations: [
    MaestroComponent,
    BasketComponent
  ],
  exports: [
    MaestroComponent,
    BasketComponent
  ]
})
export class ShopModule { }
